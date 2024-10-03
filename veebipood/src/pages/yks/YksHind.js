import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json"

function YksHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  return (
    <div>
      <div>Järjekorranumber:{index}</div>
      <div>Hind: {leitud.number} </div>
      <div>Lisaja:{leitud.number} </div>
    </div>
  )
}

export default YksHind
