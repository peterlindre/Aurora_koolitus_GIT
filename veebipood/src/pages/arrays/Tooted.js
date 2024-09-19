import React, { useState } from 'react'


//filtreeri
//sorteeri

 // Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt
  // Reset nupp
  // 3 nuppu: Bga algavad, Nga algavad, Tga algavad

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