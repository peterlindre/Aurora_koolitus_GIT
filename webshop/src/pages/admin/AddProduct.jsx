import React, { useState,useRef, useEffect } from 'react';
// import productJSON from '../../data/products.json';

// "id"
// "title"
// "price"
// "description"
// "category"
// "image":
// "rating"

function AddProduct() {
const [message, setMessage] = useState("Add new product!")
  const idRef = useRef ();
  const titleRef = useRef ();
  const priceRef = useRef ();
  const descriptionRef = useRef ();
  const categoryRef = useRef ();
  const imageRef = useRef ();
  const ratingRef = useRef ();
  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
    },[]);


  function add(){
    if (titleRef.current.value === "") {
      setMessage ("Cannot add product without a name!")
      return;
    }

  setMessage ("Product added: " + titleRef.current.value)
  const addedProduct = {
    "id" : Number(idRef.current.value),
    "title" : titleRef.current.value,
    "price": Number(priceRef.current.value),
    "description" : descriptionRef.current.value,
    "category" : categoryRef.current.value,
    "image": imageRef.current.value,
    "active": true, 
    "rating":{
      "rate": Number(ratingRef.current.value),
      "count": 0,
    }
  }
  products.push(addedProduct);
  fetch(url, {method: "PUT", body: JSON.stringify(products)});
  }
  const check = () => {
    if (titleRef.current.value === ""){
      setMessage("Required field is empty!")
      return;
    }

  }

  return (
    <div>
      <br />
    <div>{message}</div> <br />
      <label htmlFor="Name">Product name:</label> <br />
      <input onChange={check} ref={titleRef} id="nimi" type="text" /> <br />
      <label>ID:</label> <br />
      <input ref={idRef}  type="text" /> <br />
      <label>Image:</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>Description:</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>Price:</label> <br />
      <input ref={priceRef}  type="number" /> <br />
      <label>Rating:</label> <br />
      <input ref={ratingRef}  type="text" /> <br />
      <label>Category:</label> <br />
      <input ref={categoryRef}  type="text" /> <br />
      <button onClick={add}>Add</button>
      

    </div>
  )
}

export default AddProduct
