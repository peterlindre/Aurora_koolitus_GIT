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


import React from 'react'
import { useParams } from 'react-router-dom';
import tootedFailist from "../../data/tooted.json";

function MuudaToode() {
  const{index} = useParams ();
  const leitud = tootedFailist[index]




  return (
    <div>
      <label> Toode</label> <br />
      <input type="text" defaultValue={leitud} /> <br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaToode