import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
// import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';
import ParcelMachines from '../../components/ParcelMachines';
import Payment from '../../components/Payments'
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { CartSumContext } from '../../store/CartSumContext';
import styles from "../../css/Cart.module.css"




 

function Cart() {
  const { t } = useTranslation();
  const [products, changeProducts] = useState (JSON.parse(localStorage.getItem("cart")) || []);
  const {setCartSum} = useContext(CartSumContext);


  const empty = () => {
    products.splice(0);
    changeProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(0);
  }

  const remove = (index) => {
    products.splice(index,1);
    changeProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(addAll())
  }
  
  const addAll = () => {
    let summa = 0;
    products.forEach(product => summa = summa + product.toode.price * product.kogus);
    return summa.toFixed(2);
  }
  const countAll = () => {
    let summa = 0;
    products.forEach(product => summa = summa + product.kogus);
    return summa;
  }

  const decreaseQuantity = (index) => {
 products[index].kogus = products[index].kogus - 1;
 if (products[index].kogus === 0){
  products.splice(index,1);
  setCartSum(addAll())
 }
 changeProducts(products.slice());
 localStorage.setItem("cart", JSON.stringify(products));
 setCartSum(addAll())
  }
  const increaseQuantity = (index) => {
    products[index].kogus = products[index].kogus + 1;
    changeProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(addAll())
  }
  

  return (
    <div>
      {/* <Button variant="contained">Contained</Button> */}
      {products.length > 0 && <Button variant="contained" onClick={empty}>{t("Clear all")}</Button>}

      {products.length > 0 && <div>{t("Items in cart")}: {products.length} {t("pcs")}</div>}

      {products.map((product, index) =>  
        <div className={styles.cart__product} key={index}>
          <img className={styles.cart__image} src={product.toode.image} alt={product.title} />
         <div className={styles.cart__title}>{product.toode.title}</div>
         <div className={styles.cart__price}>{product.toode.price}€</div>
         <img className={styles.cart__button} onClick={() => decreaseQuantity(index)} src="/minus-sign.png" alt="" />
         {/* <>-</button> */}
         <div className={styles.cart__quantity}>{product.kogus}pcs</div>
         <img className={styles.cart__button} onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
         {/* <button >+</button> */}
         <div className={styles.cart__sum}>{product.toode.price * product.kogus}€</div>
         <div className={styles.cart__count}>{product.kogus}€</div>
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
          Count : {countAll()} pcs

         
          <Payment sum={addAll()} />
    </div>

  )
}

export default Cart