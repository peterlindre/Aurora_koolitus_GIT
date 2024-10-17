import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
// import productJSON from '../../data/products.json';

function SingleProduct() {
  const {productName} = useParams();
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.title.replaceAll("/", "").replaceAll(" ", "-").toLowerCase() === productName);
  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
    },[]);

if (found === undefined) {
  return <div>No products found!</div>
}

  return (
    <div>
      <img style={{width:"100px"}} src={found.image} alt="" />
      <div>Product id: {found.id}</div>
      <div>Product name: {found.title}€</div>
      <div>Product price: {found.price}</div>
      <div>Product description: {found.description}</div>
      <div>Product category: {found.category}</div>
 
      <div>Product rating: {found.rating.rate}</div>
    



    </div>
  )
}

export default SingleProduct

