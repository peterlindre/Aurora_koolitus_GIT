import React, { useRef, useState } from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { Link } from 'react-router-dom';

//kodus

// 'lisamine mingi kindla tooaaja osas
// lisamine l2bi vormi
// 'kustutamine esimene, teine, kolmas, neljas
//kustutamine
//tyhjendamine 
// koguarvu v2lja n2itamine
// dynaamika -> n2ita nuppu voi teksti kui pikkus on sobiv (&& abil)


function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState (tootajadJSON);
  const tootajaRef = useRef();
 
  const kustutaEsimene = () =>{
    tootajadJSON.splice(0,1);
    muudaTootajad(tootajadJSON.slice());
  
}
const kustutaTeine = () =>{
  tootajadJSON.splice(1,1);
  muudaTootajad(tootajadJSON.slice());
}
  const kustutaKolmas = () =>{
    tootajadJSON.splice(2,1);
    muudaTootajad(tootajadJSON.slice());
}
    const kustutaNeljas = () =>{
      tootajadJSON.splice(3,1);
      muudaTootajad(tootajadJSON.slice());
}
const lisa = () => {
tootajadJSON.push(tootajaRef.current.value);
muudaTootajad(tootajadJSON.slice());
}
const kustuta = (index) => {
tootajadJSON.splice(index,1);
muudaTootajad(tootajadJSON.slice());
}

  return (

    <div>
       <br />
      <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button>
      <br /> <br />
       <label>Töötajad</label> 
       <input ref={tootajaRef} type="text" />
      <button onClick={lisa}>Lisa</button><br /> 
      <br />
      {tootajad.map((tootaja, index) => 
      <div>
        <div>{tootaja}</div>
      <button onClick={() => kustuta(index)}>X</button>
      <Link to={"/muuda-tootaja/" + index} >
        <button>Muuda</button>
      </Link>
      </div>
      )}
    </div>
  )
}

export default HaldaTootajad