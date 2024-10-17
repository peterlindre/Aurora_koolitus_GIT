import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
// import productsFromFile from "../../data/products.json";
import { useRef } from 'react';

function EditProduct() {
const { index } = useParams();
const [products, setProducts] = useState([]);
const found = products[index];
  const idRef = useRef ();
  const titleRef = useRef ();
  const priceRef = useRef ();
  const descriptionRef = useRef ();
  const categoryRef = useRef ();
  const imageRef = useRef ();
  const ratingRef = useRef ();
  const activeRef = useRef();
  const countRef = useRef(); 
  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
    },[]);



  const add = () => {
    products[index] = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price":  Number(priceRef.current.value),
      "descripton": descriptionRef.current.value,
      "active": activeRef.current.checked,
      "image": imageRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": Number(countRef.current.value)
      }
    }
    fetch(url, {method: "PUT", body: JSON.stringify(products)});
  }

  if (found === undefined) {
    return <div>Product not found!</div>
  }

  return (
    <div>
        <label htmlFor="Name">Product name:</label> <br />
      <input  ref={titleRef} defaultValue={found.title} type="text" /> <br />
      <label>ID:</label> <br />
      <input ref={idRef} defaultValue={found.id} type="text" /> <br />
      <label>Active:</label> <br />
      <input ref={activeRef} defaultValue={found.active}  type="checkbox" /> <br />
      <label>Image:</label> <br />
      <input ref={imageRef}  defaultValue={found.image} type="text" /> <br />
      <label>Description:</label> <br />
      <input ref={descriptionRef} defaultValue={found.description}  type="text" /> <br />
      <label>Price:</label> <br />
      <input ref={priceRef} defaultValue={found.price}  type="number" /> <br />
      <label>Rating:</label> <br />
      <input ref={ratingRef}  defaultValue={found.rating} type="number" /> <br />
      <label>Count:</label> <br />
      <input ref={countRef} defaultValue={found.count}  type="number" /> <br />
      <label>Category:</label> <br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
        <button onClick={add}>Add</button> 


    </div>
  )
}

export default EditProduct