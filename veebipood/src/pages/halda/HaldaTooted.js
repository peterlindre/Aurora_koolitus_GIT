import React, { useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { Link } from 'react-router-dom';


function HaldaTooted() {
  const [tooted, muudaTooted] = useState (tootedJSON);
  const tootedRef = useRef(); 

  const kustutaEsimene = () =>{
    tootedJSON.splice(0,1);
    muudaTooted(tootedJSON.slice());
}
    const kustutaTeine = () =>{
      tootedJSON.splice(1,1);
      muudaTooted(tootedJSON.slice());
}
      const kustutaKolmas = () =>{
        tootedJSON.splice(2,1);
        muudaTooted(tootedJSON.slice());
}
        const kustutaNeljas = () =>{
          tootedJSON.splice(3,1);
          muudaTooted(tootedJSON.slice());
 }
 const lisa = () => {
  tootedJSON.push(tootedRef.current.value);
  muudaTooted(tootedJSON.slice());
 }
 

 const kustuta = (index) => {
  tootedJSON.splice(index,1);
  muudaTooted(tootedJSON.slice());
 }


  return (
    <div>
      <br />
      <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button>
      <br /> <br />
       <label>Tooted</label> 
       <input ref={tootedRef} type="text" />
      <button onClick={lisa}>Lisa</button><br /> 
      <br />
      {tooted.map((toode, index) => 
      <div>
        <div>{toode}</div>
      <button onClick={() => kustuta(index)}>X</button>
      <Link to={"/muuda-toode/" + index} >
        <button>Muuda</button>
      </Link>
      </div>
)}
      </div>
    
  )
}

export default HaldaTooted 