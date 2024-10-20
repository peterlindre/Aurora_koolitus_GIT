import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Supplier() {
const [products, setProducts] = useState([]);

// useEffect = k2ivitud siia lehele tulles
useEffect(() => {
  
  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(json => setProducts(json))
}, []);

const { t } = useTranslation();


  return (
    <div>
       <table>
        <thead>
        <tr> 
          <th>{t("Picture")}</th>
          <th>{t("Name")}</th>
          <th>{t("Price")}</th>
          <th>{t("Rating")}</th> 
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