import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

function MuudaUudis() {
  const {index} = useParams();
  const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
  const leitudUudis = uudisedLS[index];
  const uudiseRef = useRef();

const muuda = () => {
  uudisedLS[index] = uudiseRef.current.value;
  localStorage.setItem("uudised", JSON.stringify(uudisedLS));
}

  return (
    <div>
      <label> Uudis</label> <br />
      <input ref={uudiseRef} type="text" defaultValue={leitudUudis}/> <br />
      <button onClick={muuda}>Muuda</button>


    </div>
  )
}

export default MuudaUudis