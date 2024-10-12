import React, {useRef, useState} from 'react'
import productJSON from "../../data/products.json"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'material-react-toastify';

function MaintainProducts() {
const [product, setProduct] = useState (productJSON.slice());
const searchRef = useRef () ;

const empty = (index) => {
  productJSON.splice(index,1);
  setProduct(productJSON.slice());
  toast.success("Item removed");
}
const search = () => {
  const value = productJSON.filter(index => index.title.includes(searchRef.current.value));
setProduct(value);
}

  return (
    <div>
       <input ref={searchRef} onChange={search} type="text" />
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
          {product.map((product, index) => 
          <tr key={index}>
            <td> <img style={{"width" : "50px"}} src={product.image} alt="" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
            {/* <td>{product.rate}</td> */}
            <button onClick={() => empty(index)}>X</button>
        
          </tr>
          )}
        </tbody>
      </table>
      <ToastContainer
           position="top-right"
           autoClose={2000}
           theme="dark" /> 
    </div>
  )
}



export default MaintainProducts