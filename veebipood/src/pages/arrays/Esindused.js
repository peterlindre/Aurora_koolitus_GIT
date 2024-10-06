import React, { useState } from 'react'
import { useRef } from 'react';
import esindusedFailist from "../../data/esindused.json"
import { Link } from 'react-router-dom';

// .sort((a,b) => a-b )
// lahumistehe - paneb numbrid jarjekorda

//.sort ((a,b) => a.localeCompare(b) )
// locale - keel
// Compare - v6rdle

function Esindused() {
const [linn, muudaLinn] = useState("Tallinn");
const [keskused, muudaKeskused] = useState (esindusedFailist.slice());
const otsinguRef = useRef () ; 

const reset = () => {
  muudaKeskused (esindusedFailist.slice());
}

// "et" v6tab eesti keelse t2hestiku
const sorteeriAZ = () => {
  keskused.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
  muudaKeskused(keskused.slice()); // HTMLi uuendamiseks
}

const sorteeriZA = () => {
  // keskused.sort();
  // keskused.reverse();
  keskused.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
  muudaKeskused(keskused.slice()); 
}

const sorteeriTahedKasvavalt = () => {
keskused.sort((a,b) => a.nimi.length - b.nimi.length);
muudaKeskused(keskused.slice());
}
const sorteeriTahedKahanevalt = () => {
  keskused.sort((a,b) => b.nimi.length - a.nimi.length);
  muudaKeskused(keskused.slice());
}
const sorteeriKolmasTahtAZ = () => {
  keskused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
  muudaKeskused(keskused.slice()); // HTMLi uuendamiseks
}

const filtreeriEgaLoppevad = () => {
  // filtreerimisel tuleb teha uus muutuja kuhu sisse jaavad alles jaetud elemendid
const vastus = esindusedFailist.filter(keskus => keskus.nimi.endsWith("e"));
muudaKeskused(vastus);
}
const filtreeriVahemalt7Tahelised = () => {
const vastus = esindusedFailist.filter(keskus => keskus.nimi.length >= 7);
muudaKeskused(vastus);
}
const filtreeriVahemalt9Tahelised = () => {
  const vastus = esindusedFailist.filter(keskus => keskus.nimi.length === 9);
muudaKeskused(vastus);
}
const filtreeriIsSisaldavad = () => {
  const vastus = esindusedFailist.filter(keskus => keskus.nimi.includes ("is"));
muudaKeskused(vastus);
}
const filtreeriKolmasTahtI = () => {
  const vastus = esindusedFailist.filter(keskus => keskus.nimi[3] === ("s"));
muudaKeskused(vastus);
}

const otsi = () => {
  const vastus = esindusedFailist.filter(keskus => keskus.nimi.includes (otsinguRef.current.value));
  muudaKeskused(vastus);
}

const arvutaKokku = () => {
  let summa = 0; //=> summa += keskus.lenght... ---> liida vanale summale
  keskused.forEach(keskus => summa =  summa + keskus.nimi.length);
return summa;
}

  return (
    <div>
      <div>Esinduse nimetähtede arv kokku: {arvutaKokku()} tk</div>


      <input ref={otsinguRef} onChange={otsi} type="text" />
      {/* <button onClick={otsi}>Otsi</button> */}
      <br /><br />
      <div>Aktiivne linn: {linn}</div>
      <button className= {linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button> 
      <button className= {linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className= {linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
      <button className= {linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Narva")}>Narva</button>

      {linn === "Tallinn" &&
         <div>
            <button onClick={reset} >Reset</button>
            <br /> <br />
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
          <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-X</button>
        <br />
        <button onClick={filtreeriEgaLoppevad}>Filtreeri E'ga lõppevad</button>
        <button onClick={filtreeriVahemalt7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
        <button onClick={filtreeriVahemalt9Tahelised}>Filtreeri täpselt 9 tähelised</button>
        <button onClick={filtreeriIsSisaldavad}>Filtreeri lühendit 'is' sisaldavad</button>
        <button onClick={filtreeriKolmasTahtI}>Filtreeri kellel on neljas täht 's'</button>
        <br />
          {keskused.map((keskus, index) =>   
            <div>
              
              {keskus.nimi}:
              {keskus.tel}
              {keskus.aadr}
              <Link to={"/esindus/" + index}>
              <button>Vt lähemalt</button> 
              </Link>
            </div>)}
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> */}
        </div>}

      {linn === "Tartu" &&
         <div>
          <div>Raatuse</div>
          <div>Lõuna Keskus</div>
        </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}

      


    </div>
  )
}

export default Esindused