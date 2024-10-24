import React, { useState,useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
const { t } = useTranslation();
  const idRef = useRef ();
  const titleRef = useRef ();
  const priceRef = useRef ();
  const descriptionRef = useRef ();
  const categoryRef = useRef ();
  const imageRef = useRef ();
  const ratingRef = useRef ();
  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoryDburl = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState ([]);


  useEffect(() => {
    fetch(categoryDburl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
    
    },[]);

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
      <label htmlFor="Name">{t("Product name")}:</label> <br />
      <input onChange={check} ref={titleRef} id="nimi" type="text" /> <br />
      <label>ID:</label> <br />
      <input ref={idRef}  type="text" /> <br />
      <label>{t("Image")}:</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>{t("Description")}:</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>{t("Price")}:</label> <br />
      <input ref={priceRef}  type="number" /> <br />
      <label>{t("Rating")}:</label> <br />
      <input ref={ratingRef}  type="text" /> <br />
      <label>{t("Category")}:</label> <br />
      {/* <input ref={categoryRef}  type="text" /> */}
     <select ref={categoryRef}>
     {categories.map(category => <option> {category.name}</option>)}
      </select>
       <br />
      <button onClick={add}>{t("Add")}</button>
      

    </div>
  )
}

export default AddProduct
