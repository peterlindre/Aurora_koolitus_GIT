import React, { useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ostukorvJSON from "../../data/ostukorv.json";
import Button from '@mui/material/Button';
// import Hinnad from './Hinnad';


//KOJU
// tootajad objektiks {nimi,tel,ametikoht, email}
// MuudaEsindus, MuudaTootaja failis

function Tooted() {
  const [tooted, muudaTooted] =  useState(tootedJSON.slice());
  const otsingRef = useRef();

  const reset = () => {
    muudaTooted (tootedJSON.slice());
  }


  const sorteeriKasvavalt = () => {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaTooted(tooted.slice());
  }
  const sorteeriKahanevalt = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaTooted(tooted.slice());
  }
  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaTooted(tooted.slice());
  
  }
  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    muudaTooted(tooted.slice());
    
  }
  const filtreeriAlgavadB = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "B")
    muudaTooted(vastus);
  }
 

  const filtreeriAlgavadN = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "N")
    muudaTooted(vastus);
  }
  const filtreeriAlgavadT = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "T")
    muudaTooted(vastus);
  }
  const otsi = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi.includes(otsingRef.current.value) );
    muudaTooted(vastus);
  }
  const arvutaKokku = () => {
    let summa = 0; //=> summa += keskus.lenght... ---> liida vanale summale
    tooted.forEach(tooted => summa =  summa + tooted.nimi.length);
  return summa;
  }

  const lisaOstukorvi = (lisatudToode) => {
    // ostukorvJSON.push(lisatudToode);
   const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
   ostukorvLS.push(lisatudToode); 
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS) )
  }

  // 1. V6tan localStoragest vana ostukorvi sisu (localstorage.getItem)
  // 1.1 kui vana ostukorvi v6ttes on tyhjus, pean ytlema, et tyhi array tuleks ( || [] )
  // 2. V6tan jutum2rgid 2ra (JSON.parse)
  // 3. lisan toote juurde / kustutan toote (.push / .splice)
  // 4. Lisan localstoragesse tagasi (localstorage.setItem)
  // 5. Lisan ostukorvi sisule jutum2rgid tagasi (JSON.stringify)
  
  
  return (
    <div>
       <div>Toodete nimetähtede arv kokku: {arvutaKokku()} tk</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}

<br />
      <Button onClick={reset}variant="outlined">Reset</Button>
      <br /><br />
      <Button onClick={sorteeriKasvavalt}variant="text">Sorteeri kasvavalt</Button>
      <Button onClick={sorteeriKahanevalt}variant="text">Sorteeri kahanevalt</Button>
      <Button onClick={sorteeriAZ}variant="text">Sorteeri A-Z</Button>
      <Button onClick={sorteeriZA}variant="text">Sorteeri Z-A</Button>
      <Button onClick={filtreeriAlgavadB}variant="text">Filtreeri B tähega algavad</Button>
      <Button onClick={filtreeriAlgavadN}variant="contained">Filtreeri N tähega algavad</Button>
      <Button onClick={filtreeriAlgavadT}variant="contained">Filtreeri T tähega algavad</Button>
      
      <br /><br />
      
      <br /><br />
     
      {tooted.map((toode, index) => 

       <div key={index}>
        <img  className={toode.aktiivne === true ? "pilt": "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
        {toode.nimi} - {toode.hind}€
      <Link to={"/toode/" + toode.nimi.replaceAll("/", "").replaceAll(" ", "-").toLowerCase()}>
        <button>Vt lähemalt</button>
      </Link>
      {toode.aktiivne === true &&< button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> }
        </div>
        )}
    </div>


  )
}

export default Tooted