import React, {useState} from 'react'
import productJSON from "../../data/products.json"
// import { Link } from 'react-router-dom';


function MaintainProducts() {
const [product, changeProduct] = useState (productJSON.slice());

const empty = (index) => {
  productJSON.splice(index,1);
  changeProduct(productJSON.slice());
}

  return (
    <div>
      <table>
        <thead>
        <tr> 
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {product.map((product, index) => 
          <tr key={index}>
            <td> <img style={{"width" : "50px"}} src={product.image} alt="" /></td>
            <td>{product.image}</td>
            <td>{product.id}</td>
            <td>{product.price}</td>
            <button onClick={() => empty(index)}>X</button>
        
          </tr>
          )}
        </tbody>
      </table>


    </div>
  )
}



export default MaintainProducts