
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import cartJSON from "../../data/cart.json";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';


function HomePage() {
  const [products, setProducts] = useState([]);


  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
    },[]);
  // const reset = () => {
  //   setProducts (productsFromFile.slice());
  // }

  const addToCart = (addedProduct) => {
    cartJSON.push(addedProduct);
    toast.success("Item added to cart");
  };

  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title))
    setProducts(products.slice());
  }
  const sortZA = () => {
    products.sort((a,b) => b.title.localeCompare(a.title))
    setProducts(products.slice());
  }
  const sortAscendingPrice = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
    }
    const sortDecendingPrice = () => {
      products.sort((a, b) => b.price - a.price);
      setProducts(products.slice());
      }

      const filterElectronics = () => {
        const filteredProducts = products.filter(product => product.category === "electronics");
      setProducts(filteredProducts);
      }
      const filterJewelery = () => {
        const filteredProducts = products.filter(product => product.category === "jewelery");
      setProducts(filteredProducts);
      }
      const filterMensClothing = () => {
        const filteredProducts = products.filter(product => product.category === "men's clothing" );
      setProducts(filteredProducts);
      }
      const filterWomensClothing = () => {
        const filteredProducts = products.filter(product => product.category === "women's clothing");
      setProducts(filteredProducts);
      }
           // Sorting by Rating Ascending
    const sortRatingAscending = () => {
      products.sort((a, b) => a.rating.rate - b.rating.rate);
      setProducts(products.slice());
    }
  
    // Sorting by Rating Descending
      const sortRatingDescending = () => {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
      setProducts(products.slice());
    }

    // if (product.length === 0) {
    //   return 
    // }
 

  return (
    <div>
      
     
     
      <ButtonGroup>
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortAscendingPrice}>Price ascending</Button>
      <Button onClick={sortDecendingPrice}>Price decending</Button>
      <Button onClick={sortRatingAscending}>Rating ascending</Button>
      <Button onClick={sortRatingDescending}>Rating descending</Button>
     
      <DropdownButton as={ButtonGroup} title="Select Category" id="category-dropdown">
        <Dropdown.Item onClick={filterMensClothing} >Men's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterWomensClothing}>Women's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterJewelery} >Jewelery</Dropdown.Item>
        <Dropdown.Item onClick={filterElectronics} >Electronics</Dropdown.Item>
      </DropdownButton>
      </ButtonGroup>
    
     


      {products.map(product =>
      
        <div key={product.id}>
          <img style={{width:"100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}€</div>
          { < button onClick={() => addToCart(product)}>Add to cart</button> }

          { 
            <Link to={"/product/" + product.title.replaceAll("/", "").replaceAll(" ", "-").replaceAll("/", "").replaceAll(" ", "-").toLowerCase()}>
               <button>Inspect</button>
            </Link>
          }
          </div>





      )}
     
        <ToastContainer
           position="top-right"
           autoClose={2000}
           theme="dark" /> 
    </div>
  );
}

export default HomePage