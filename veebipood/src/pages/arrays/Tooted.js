import React, { useState } from 'react'




function Tooted() {
  const [tooted, muudaTooted] =  useState(["Nobe", "BMW", "Tesla", "Bentley", "Toyota", "Nissan"]);
  return (
    <div>
      {tooted.map(toode=> <div>{toode}</div>)}
      <div>Tooted</div>
    </div>


  )
}

export default Tooted