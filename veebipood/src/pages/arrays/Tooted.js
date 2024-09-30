import React, { useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import Hinnad from './Hinnad';


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
  const [tooted, muudaTooted] =  useState(tootedJSON);
  const otsingRef = useRef();

  const reset = () => {
    muudaTooted (tootedJSON);
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
    const vastus = tootedJSON.filter(toode => toode[0] === "B")
    muudaTooted(vastus);
  }
 

  const filtreeriAlgavadN = () => {
    const vastus = tootedJSON.filter(toode => toode[0] === "N")
    muudaTooted(vastus);
  }
  const filtreeriAlgavadT = () => {
    const vastus = tootedJSON.filter(toode => toode[0] === "T")
    muudaTooted(vastus);
  }
  const otsi = () => {
    const vastus = tootedJSON.filter(toode => String(toode).includes(otsingRef.current.value) );
    muudaTooted(vastus);
  }
  const arvutaKokku = () => {
    let summa = 0; //=> summa += keskus.lenght... ---> liida vanale summale
    tooted.forEach(tooted => summa =  summa + tooted.length);
  return summa;
  }
  
  
  return (
    <div>
       <div>Toodete nimetähtede arv kokku: {arvutaKokku()} tk</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      


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
      
      {tooted.map((toode, index) => 
      <Link to={"/toode/" + index}>
        <button>{toode}</button>
      </Link>
        )}
    </div>


  )
}

export default Tooted