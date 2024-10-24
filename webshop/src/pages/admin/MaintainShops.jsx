import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'material-react-toastify';
import { useTranslation } from 'react-i18next';


function MaintainShops() {

  const [shops, setShops] = useState ([]);
  const searchRef = useRef () ;

  


  const url = "https://veebipood-inglise-keelne-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setShops(json || []))
    
    },[]);
  
    const { t } = useTranslation();

  const addShop = () => {
    shops.push({"name": searchRef.current.value});
    fetch (url, {method: "PUT", body: JSON.stringify(shops)});
  }

  
  const remove = (index) => {
    shops.splice(index,1);
    setShops(shops.slice());
    toast.success("Shop removed");
    fetch(url, {method: "PUT", body: JSON.stringify(shops)});
  }
  const search = () => {
    const value = shops.filter(index => index.title.includes(searchRef.current.value));
  setShops(value);
  }


// shops.push ({
// "name": nameRef.current.value, 
// "longitude" : longitudeRef.current.value,
// "latitude" : latitudeRef.current.value,
// "openTime" : openTimeRef.current.value,
// "googleMapsAadress" : mapsRef.current.value
//})

  return (
    <div>
      


<div>
      <label> Name </label>
      <input type="text" />

      <label> Opening times </label>
      <input type="text" />

      <label> Latitude </label>
      <input type="text" />

      <label> Longitude </label>
      <input type="text" />

      <label> Google Maps URL </label>
      <input type="text" />
      </div>



      <input ref={searchRef} onChange={search} type="text" />
      <table>
        <thead>
        <tr> 
          <th>{t("Store")}</th>
          <th>{t("Location")}</th>
          <th>{t("Aadress")}</th>
          
        </tr>
        </thead>
        <tbody>
          {shops.map((product, index) => 
          <tr key={index} className={product.active === true ? "active" : "inactive"}>
            <td> <img style={{"width" : "50px"}} src={product.image} alt="" /></td>
            <td>Ülemiste</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
          
            <button onClick={() => remove(index)}>X</button>
           <button onClick={addShop}>Add new shop</button>
          
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

export default MaintainShops