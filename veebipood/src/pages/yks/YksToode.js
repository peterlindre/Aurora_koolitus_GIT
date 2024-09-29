import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json";

function YksToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];
  return (


    <div>
      <div>Järjekorranumber:{index}</div>
      <div>Toote nimi: {leitud}</div>
      <div>Toote kogus:</div>
      {false&&  <div>Seda toodet pole! </div>}
    </div>
  )
}

export default YksToode
