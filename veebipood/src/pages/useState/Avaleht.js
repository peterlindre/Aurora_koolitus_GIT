import React, { useState } from 'react'
import KontaktAndmed from '../../components/KontaktAndmed';


function Avaleht() {
// kõik mida pole tavalises JavaScriptis ja on Reactis, tuleb importida. useState, useRef
// kõik mida pole tavalises HTMLs ja on Reactis, tuleb importida. Link, Route, Routes, BrowserRouter

  //  muutuja on HTMLs
//            muutja läheb käima onClick
//                        useState -> importida, sest tegemist on Reacti koodiga, mida pole JS-s
//                                    algväärtus -> kui refreshida või lehelt ära minna ja tagasi tulla
  //    [muutuja, muutja]   = useState(ALGVÄÄRTUS)

  const [kogus, muudaKogus] = useState(0);
  const [sonum, muudaSonum] = useState ("Muuda kogust!")
  const [laigitud, muudaLaigitud] = useState(false);
  function nulli () {
  muudaKogus (0);
  muudaSonum ("Nullisid koguse!");  
  }
  function vahenda () {
    muudaKogus (kogus - 1);
    muudaSonum ("Vähendasid kogust!");  
    }
    function suurenda () {
      muudaKogus (kogus + 1);
      muudaSonum ("Suurendasid kogust!");  
      }
      // kui kasutan useState funktsiooni, siis:
//  const [muutuja, muutja] = useState(algväärtus);
//  <button onClick={() => muutja(UUS_VÄÄRTUS)}>Nupu tekst</button>

// kui kasutan enda tehtud funktsiooni, siis:
//  <button onClick={lyhidalt}>Nupu tekst</button>

  return (
    <div>
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
     { laigitud === true && <img src="/laigitud.svg" alt="" />}
       {/* <button onClick={() => muudaLaigitud(false)}>Laik peale</button>
       <button onClick={() => muudaLaigitud(true)}>Laik maha</button> */}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like-i</button>

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Nulli kogus</button>}
      {/*kogus > 0 && <button onClick={nulli}>Nulli kogus</button> */}
      <button disabled= {kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>

        <KontaktAndmed/>
      </div>
  )
}

export default Avaleht