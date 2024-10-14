import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Supplier() {
const [products, setProducts] = useState([]);

// useEffect = k2ivitud siia lehele tulles
useEffect(() => {
  
  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(json => setProducts(json))
}, []);



  return (
    <div>
       <table>
        <thead>
        <tr> 
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rating</th> 
        </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
          <tr key={index}>
            <td> <img style={{"width" : "50px"}} src={product.image} alt="" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
         
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier