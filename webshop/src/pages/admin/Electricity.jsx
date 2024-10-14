import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Electricity() {
const [prices, setPrice] = useState([]);

useEffect(() => {
  
  fetch("https://dashboard.elering.ee/api/nps/price")
  .then(res => res.json()) // metaandmed (staatuskood, headers, ....)
  .then(json => setPrice(json.data.ee)) // reaalselt mida ma naen brauseris
}, []);

  return (
    <div>
      
{prices.map(price =>

   <div>
    <div> {new Date().getDate()}.{new Date().getMonth() + 1}.{new Date().getFullYear()}</div>
    {new Date(price.timestamp*1000).getHours()}.00: 

{price.price}€
    </div>)}

    </div>
  )
}

export default Electricity