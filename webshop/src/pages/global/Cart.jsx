import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';
import ParcelMachines from '../../components/ParcelMachines';
import Payment from '../../components/Payments'

function Cart() {
  const [products, changeProducts] = useState (cartJSON.slice());

  const empty = () => {
    cartJSON.splice(0);
    changeProducts(cartJSON.slice());
  }

  const remove = (index) => {
    cartJSON.splice(index,1);
    changeProducts(cartJSON.slice());

  }
  
  const addAll = () => {
    let summa = 0;
    products.forEach(product => summa = summa + product.price);
    return summa;
  }
  

  return (
    <div>
      
      {products.length > 0 && <button onClick={empty}>{"Clear all"}</button>}

      {products.length > 0 && <div>Items in cart: {products.length} pcs</div>}

      {products.map((product, index) =>  
        <div key={index}>
          {index}
          {product.title} <br /> <img src={product.image} alt={product.title} style={{ width: '40px', height: 'auto' }} /> {product.price}€ <br /> 
           
           <CloseButton onClick={() => remove(index)}/> 
        </div>)}
        { products.length === 0 &&
       <>
        <div>Cart is empty</div>
        <div>Go back to <Link to="/">homepage</Link></div> 
      </>}


        {products.length > 0 &&
        
        <div>
          <ParcelMachines/>
          Amount: {addAll()}€ </div>}

          <Payment />
    </div>

  )
}

export default Cart