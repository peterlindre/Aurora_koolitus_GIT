import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadFailist from "../../data/tootajad.json";


function YksTootaja() {
const {index} = useParams();
const leitud = tootajadFailist[index];
  return (
    <div>
      <div>Järjekorranumber: {index} </div>
      <div>Töötaja nimi: {leitud} </div>
      <div>Töötaja kontakt:</div>
      {false && <div>Töötaja puudub </div>}
    </div>
  )
}

export default YksTootaja
