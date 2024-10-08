import React from 'react'
import { useParams } from 'react-router-dom'
import esindusFailist from "../../data/esindused.json";

function YksEsindus() {
  const {index} = useParams();
  const leitud = esindusFailist[index];
  return (
    <div>
      
      <div>Järjekorranumber:{index}</div>
      <div>Esinduse nimi: {leitud.nimi} </div>
      <div>Esinduse telefoninumber:{leitud.tel}</div>
      <div>Esinduse aadress:{leitud.aadr}</div>
     {false&&  <div>Esindus on suletud</div>}
    </div>
  )
}

export default YksEsindus