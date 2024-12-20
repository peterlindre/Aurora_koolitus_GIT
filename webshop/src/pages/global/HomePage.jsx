
import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import productsFromFile from "../../data/products.json";
// import cartJSON from "../../data/cart.json";
import { Button as MuiButton} from '@mui/material';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next';
import SortButtons from '../../components/SortButtons';
import { CartSumContext } from '../../store/CartSumContext';
import styles from "../../css/HomePage.module.css"

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState ([]);
  const {setCartSum} = useContext(CartSumContext);

  const { t } = useTranslation();




  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoryDburl = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);


  useEffect(() => {
  fetch(categoryDburl)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  
  },[]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || [])
      })
    
    },[]);
  // const reset = () => {
  //   setProducts (productsFromFile.slice());
  // }

  const addToCart = (addedProduct) => {
    // cartJSON.push(addedProduct);
   const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
   const cartProduct = cartLS.find(product => product.toode.id === addedProduct.id);
   if (cartProduct !== undefined) {
      //suurendan kogust (kui yks on juba ostukorvis)
      cartProduct.kogus = cartProduct.kogus +1; 
   } else {
    // lisan loppu yhe juurde, kogusega 1(sest teda pole ostukorvis)
    cartLS.push({"kogus": 1, "toode": addedProduct});
   }
   
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success("Item added to cart");
    let sum = 0
    cartLS.forEach(product => sum = sum + product.toode.price * product.kogus);
    setCartSum(sum);


  };

  
    const filter = (categoryClicked) => {
      const filteredProducts = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filteredProducts);
   }

    // if (product.length === 0) {
    //   return 
    // }
 

  return (
    <div>
      
     
     
      <ButtonGroup>
      <SortButtons products={products} setProducts={setProducts} />
     
      <DropdownButton as={ButtonGroup} title={t("Select Category")} id="category-dropdown">
        {/* <Dropdown.Item onClick={filterMensClothing} >{t("Men's clothing")}</Dropdown.Item>
        <Dropdown.Item onClick={filterWomensClothing}>{t("Women's clothing")}</Dropdown.Item>
        <Dropdown.Item onClick={filterJewelery} >{t("Jewelery")}</Dropdown.Item>
        <Dropdown.Item onClick={filterElectronics} >{t("Electronics")}</Dropdown.Item> */}
      {categories.map (category => 
        <Dropdown.Item onClick={() => filter(category.name)} >{category.name}</Dropdown.Item>
      )}
      </DropdownButton>
      </ButtonGroup>
    
     
<div className={styles.products}>
      {products.map(product =>
        <div className= {styles.product} key={product.id}>
          <img className={styles.image} src={product.image} alt="" />
          <div className={styles.title}>{product.title}</div>
          <div>{product.price}€</div>
          { < MuiButton variant='contained' onClick={() => addToCart(product)}>{t("Add to cart")}</MuiButton> }

          { 
            <Link to={"/product/" + product.title.replaceAll("/", "").replaceAll(" ", "-").replaceAll("/", "").replaceAll(" ", "-").toLowerCase()}>
               <MuiButton variant='outlined'>{t("Inspect")}</MuiButton>
            </Link>
          }
          </div>
      )}
     </div>
        <ToastContainer
           position="bottom-right"
           autoClose={2000}
           theme="dark" /> 
    </div>
  );
}

export default HomePage