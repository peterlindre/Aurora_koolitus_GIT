import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadJSON from "../../data/tootajad.json";



function YksTootaja() {
const {index} = useParams();
const leitud = tootajadJSON[index];
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
