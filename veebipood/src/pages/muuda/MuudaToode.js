// Kodus:
// 6 faili:
// HaldaTootajad.js TEHTUD ---> kustutamine + lisamine. faili tõstmised. otsing
// HaldaTooted.js  TEHTUD ---> kustutamine + lisamine. faili tõstmised. otsing
// Testimiseks: kustutage 1 element ja vaadake "Tootajad.js" või "Toode.js"
//            lehelt, kas ta kustus

// YksTootaja TEHTUD
// YksToode TEHTUD
// MuudaTootaja TEHTUD
// MuudaToode TEHTUD 

// Kust läheme: Halda lehelt (muuda) või Tooted.js / Tootajad.js
// <Link> import  "react-router-dom"
// Link to="" <-- siin peab olema kaldkriips ees ja kaldkriips järel

// App.js lehel:
// Vaadata, et :kooloniga oleks muutuja tähistatud
// Et URL kuhu minnakse, ühtiks sellega, mis on App.js sees (muidu on 404)

// Kuhu jõuame:
// useParams import "react-router-dom"
// import tootajadFailist õigesti

//JUURDE TEHA: YksToode j6udmine. tooted.js lehelt. hinnad,tootajad failis.VT lahemalt vaade 
// Tooted.js ja Tootajad.js t2htede kokkuarvutus nagu Esindused.js failis TEHTUD
// Tooted.js Tootajad.js search bar teha.  TEHTUD


import React from 'react'
import { useParams } from 'react-router-dom';
import tootedJSON from "../../data/tooted.json";

function MuudaToode() {
  const{index} = useParams ();
  const leitud = tootedJSON[index]




  return (
    <div>
      <label> Toode</label> <br />
      <input type="text" defaultValue={leitud} /> <br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaToode