import React, { useState } from 'react'
import Hinnad from './Hinnad';


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
  const reset = () => {
    muudaTooted (["Nobe", "BMW", "Tesla", "Bentley", "Toyota", "Nissan"]);
  }
  const sorteeriKasvavalt = () => {
    tooted.sort((a, b) => a.length - b.length);
    muudaTooted(tooted.slice());
  }
  const sorteeriKahanevalt = () => {
    tooted.sort((a, b) => b.length - a.length);
    muudaTooted(tooted.slice());
  }
  const sorteeriAZ = () => {
    tooted.sort();
    muudaTooted(tooted.slice());
  
  }
  const sorteeriZA = () => {
    tooted.sort();
    tooted.reverse();
    muudaTooted(tooted.slice());
    
  }
  const filtreeriAlgavadB = () => {
    const vastus = tooted.filter(tootaja => tootaja[0] === "B")
    muudaTooted(vastus);
  }
 

  const filtreeriAlgavadN = () => {
    const vastus = tooted.filter(tootaja => tootaja[0] === "N")
    muudaTooted(vastus);
  }
  const filtreeriAlgavadT = () => {
    const vastus = tooted.filter(tootaja => tootaja[0] === "T")
    muudaTooted(vastus);
  }
  
  return (
    <div>

<br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriAlgavadB}>Filtreeri B tähega algavad</button>
      <button onClick={filtreeriAlgavadN}>Filtreeri N tähega algavad</button>
      <button onClick={filtreeriAlgavadT}>Filtreeri T tähega algavad</button>
      
      <br /><br />
      
      <br /><br />
      {tooted.map(toode=> <div>{toode}</div>)}

      <div>Tooted</div>
    </div>


  )
}

export default Tooted