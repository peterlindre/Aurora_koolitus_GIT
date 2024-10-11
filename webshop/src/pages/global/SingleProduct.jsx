import React from 'react'
import {useParams} from 'react-router-dom'
import productJSON from '../../data/products.json';

function SingleProduct() {
  const {productName} = useParams();
  const found = productJSON.find(product => product.title === productName);


if (found === undefined) {
  return <div>No products found!</div>
}

  return (
    <div>
      
      <div>Product id: {found.id}</div>
      <div>Product name: {found.title}€</div>
      <div>Product price: {found.price}</div>
      <div>Product description: {found.description}</div>
      <div>Product category: {found.category}</div>
      <div>Product image: {found.image}</div>
      <div>Product rating: {found.rating}</div>
    



    </div>
  )
}

export default SingleProduct
