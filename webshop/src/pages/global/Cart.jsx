import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';
import ParcelMachines from '../../components/ParcelMachines';
import Payment from '../../components/Payments'
import { useTranslation } from 'react-i18next';




 

function Cart() {
  const { t } = useTranslation();
  const [products, changeProducts] = useState (JSON.parse(localStorage.getItem("ostukorv")) || []);



  const empty = () => {
    products.splice(0);
    changeProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const remove = (index) => {
    products.splice(index,1);
    changeProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }
  
  const addAll = () => {
    let summa = 0;
    products.forEach(product => summa = summa + product.price);
    return summa;
  }
  

  return (
    <div>
      
      {products.length > 0 && <button onClick={empty}>{t("Clear all")}</button>}

      {products.length > 0 && <div>{t("Items in cart")}: {products.length} {t("pcs")}</div>}

      {products.map((product, index) =>  
        <div key={index}>
          {index}
          {product.title} <br /> <img src={product.image} alt={product.title} style={{ width: '40px', height: 'auto' }} /> {product.price}€ <br /> 
           
           <CloseButton onClick={() => remove(index)}/> 
        </div>)}
        { products.length === 0 &&
       <>
        <div>{t("Cart is empty")}</div>
        <div>{t("Go back to")} <Link to="/">{t("homepage")}</Link></div> 
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