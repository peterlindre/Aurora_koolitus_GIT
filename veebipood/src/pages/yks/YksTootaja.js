import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadJSON from "../../data/tootajad.json";



function YksTootaja() {
const {index} = useParams();
const leitud = tootajadJSON[index];
  return (
    <div>
      <div>Järjekorranumber: {index} </div>
      <div>Töötaja nimi: {leitud.nimi} </div>
      <div>Töötaja telefon: {leitud.tel}</div>
      <div>Töötaja amet: {leitud.amet}</div>
      <div>Töötaja email: {leitud.email}</div>
      {leitud.aktiivne === false && <div>Töötaja puudub </div>}
    </div>
  ) 
}


export default YksTootaja
