import React, {useEffect, useRef, useState} from 'react'
// import productJSON from "../../data/products.json"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'material-react-toastify';
import { useTranslation } from 'react-i18next';

function MaintainProducts() {
const [products, setProducts] = useState ([]);
const searchRef = useRef () ;
const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/products.json";


useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  
  },[]);

  const { t } = useTranslation();

const remove = (index) => {
  products.splice(index,1);
  setProducts(products.slice());
  toast.success("Item removed");
  fetch(url, {method: "PUT", body: JSON.stringify(products)});
}
const search = () => {
  const value = products.filter(index => index.title.includes(searchRef.current.value));
setProducts(value);
}

  return (
    <div>
       <input ref={searchRef} onChange={search} type="text" />
      <table>
        <thead>
        <tr> 
          <th>{t("Picture")}</th>
          <th>{t("Name")}</th>
          <th>{t("Price")}</th>
          <th>{("Rating")}</th> 
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
            <button onClick={() => remove(index)}>X</button>
            <Link to={"/admin/edit-product/"+ index}>  
              <button>{t("Change")}</button>
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