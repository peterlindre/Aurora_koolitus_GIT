import React, {useRef, useState} from 'react'
import productJSON from "../../data/products.json"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'material-react-toastify';

function MaintainProducts() {
const [products, setProducts] = useState (productJSON.slice());
const searchRef = useRef () ;

const empty = (index) => {
  productJSON.splice(index,1);
  setProducts(productJSON.slice());
  toast.success("Item removed");
}
const search = () => {
  const value = productJSON.filter(index => index.title.includes(searchRef.current.value));
setProducts(value);
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
          {products.map((product, index) => 
          <tr key={index} className={product.active === true ? "active" : "inactive"}>
            <td> <img style={{"width" : "50px"}} src={product.image} alt="" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
            {/* <td>{product.rate}</td> */}
            <button onClick={() => empty(index)}>X</button>
            <Link to={"/admin/edit-product/"+ index}>  
              <button>Change</button>
            </Link>
          
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