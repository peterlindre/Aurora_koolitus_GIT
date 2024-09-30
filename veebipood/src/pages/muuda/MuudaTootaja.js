import React from 'react'
import { useParams } from 'react-router-dom';
import tootajadJSON from "../../data/tootajad.json"


function MuudaTootaja() {
const {index} = useParams ();
const leitud = tootajadJSON[index]

  return (
    <div>
      <label>Töötaja</label> <br />
      <input type="text" defaultValue={leitud} /> <br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaTootaja 