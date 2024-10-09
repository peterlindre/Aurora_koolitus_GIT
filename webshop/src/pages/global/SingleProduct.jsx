import React from 'react'
import {useParams} from 'react-router-dom'
import productJSON from '../../data/products.json';

function SingleProduct() {
  const {productName} = useParams();
  const found = productJSON.find(product => product.name === productName);


if (found === undefined) {
  return <div>No products found!</div>
}

  return (
    <div>
      <div>Product name: {found.title}</div>
      <div>Product price: {found.price}€</div>
      <div>Product picture: {found.image}</div>



    </div>
  )
}

export default SingleProduct