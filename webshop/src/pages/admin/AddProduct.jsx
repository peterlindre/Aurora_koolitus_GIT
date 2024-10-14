import React, { useState,useRef } from 'react';
import productJSON from '../../data/products.json';

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
    "rating": Number(ratingRef.current.value)

  }
  productJSON.push(addedProduct);
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
