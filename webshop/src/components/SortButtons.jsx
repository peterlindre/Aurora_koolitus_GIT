import Button from 'react-bootstrap/Button';
import { t } from 'i18next';
import React from 'react'

function SortButtons(props) {
  const sortAZ = () => {
    props.products.sort((a,b) => a.title.localeCompare(b.title))
    props.setProducts(props.products.slice());
  }
  
  const sortZA = () => {
    props.products.sort((a,b) => b.title.localeCompare(a.title))
    props.setProducts(props.products.slice());
  }
  const sortAscendingPrice = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
    }
    const sortDecendingPrice = () => {
      props.products.sort((a, b) => b.price - a.price);
      props.setProducts(props.products.slice());
      }

      // const filterElectronics = () => {
      //   const filteredProducts = products.filter(product => product.category === "electronics");
      // setProducts(filteredProducts);
      // }
      // const filterJewelery = () => {
      //   const filteredProducts = products.filter(product => product.category === "jewelery");
      // setProducts(filteredProducts);
      // }
      // const filterMensClothing = () => {
      //   const filteredProducts = products.filter(product => product.category === "men's clothing" );
      // setProducts(filteredProducts);
      // }
      // const filterWomensClothing = () => {
      //   const filteredProducts = products.filter(product => product.category === "women's clothing");
      // setProducts(filteredProducts);
      // }

      

         
    const sortRatingAscending = () => {
      props.products.sort((a, b) => a.rating.rate - b.rating.rate);
      props.setProducts(props.products.slice());
    }
  
  
      const sortRatingDescending = () => {
        props.products.sort((a, b) => b.rating.rate - a.rating.rate);
        props.setProducts(props.products.slice());
    }
  return (
    
    <>
      
      <Button onClick={sortAZ}>{t("Sort A-Z")}</Button>
      <Button onClick={sortZA}>{t("Sort Z-A")}</Button>
      <Button onClick={sortAscendingPrice}>{t("Price ascending")}</Button>
      <Button onClick={sortDecendingPrice}>{t("Price descending")}</Button>
      <Button onClick={sortRatingAscending}>{t("Rating ascending")}</Button>
      <Button onClick={sortRatingDescending}>{t("Rating descending")}</Button>
      
    </>
  )
}

export default SortButtons