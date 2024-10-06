import React, { useState } from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// Sorteeri
  // 1. A-Z -- TEHTUD
  // 2. Z-A -- TEHTUD

  // 3. Tähed kasvavalt 
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z TEHTUD

  // Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised TEHTUD
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad TEHTUD
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp
function Tootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadJSON.slice());
  const otsingRef = useRef ();

  const reset = () => {
    muudaTootajad(tootajadJSON.slice());
  }
    const sorteeriKasvavalt = () => {
      tootajad.sort((a, b) => a.nimi.localeCompare(b));
      muudaTootajad(tootajad.slice());

      }
      const sorteeriKahanevalt = () => {
        tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
        muudaTootajad(tootajad.slice());
      }
  
  const sorteeriAZ = () => {
    tootajad.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaTootajad(tootajad.slice());
  }
  const sorteeriZA = () => {
    tootajad.sort((a,b) => b.nimi.localeCompare(a.nimi));
    tootajad.reverse();
    muudaTootajad(tootajad.slice());

  }
  const filtreeriRoh5Tahelised = () => {
    const vastus = tootajadJSON.filter(tootaja => tootaja.nimi.length === 5 );
    muudaTootajad(vastus)
  }
  const filtreeriAlgavadM = () => {
    const vastus = tootajadJSON.filter(tootaja => tootaja.nimi[0] === "M")
    muudaTootajad(vastus);
  }
  
  const otsing = () => {
    const vastus = tootajadJSON.filter(tootaja => tootaja.nimi.includes(otsingRef.current.value) );
    muudaTootajad(vastus);
  }
  const arvutaKokku = () => {
    let summa = 0; //=> summa += keskus.lenght... ---> liida vanale summale
    tootajad.forEach(tootaja => summa =  summa + tootaja.nimi.length);
  return summa;
  }
  
    return (



    <div>
       <div>Töötajate nimetähtede arv kokku: {arvutaKokku()} tk</div>
      <br />
      <input ref={otsingRef} onChange={otsing} type="text" />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriRoh5Tahelised}>Filtreeri 5 tähelised</button>
      <button onClick={filtreeriAlgavadM}>Filtreeri M tähega algavad</button>
      <br /><br />
      
      <br /><br />
      
      {tootajad.map((tootaja, index) => 

      <div> 
        {tootaja.nimi}:
        <br />
        {tootaja.tel}:
        <br />
        {tootaja.amet}: 
        <br />
        {tootaja.email}:
        <br />
      <Link to={"/tootaja/" + index}>
        <button>{tootaja.nimi}</button>
      </Link>
      <br />
      </div>)}

    </div>
  )
}
export default Tootajad