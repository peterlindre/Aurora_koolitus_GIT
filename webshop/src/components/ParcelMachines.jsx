import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function ParcelMachines() {
const [ParcelMachines, setParcelMachines] = useState([]);

useEffect(() => {
  
  fetch("https://www.omniva.ee/locations.json")
  .then(res => res.json())
  .then(json => setParcelMachines(json))
}, []);

  return (
    <div>
      <select>
      {ParcelMachines
      .filter(pm => pm.A0_NAME === "EE")
      .map(pm => <option>{pm.NAME}</option>)}
      </select>

    </div>
  )
}

export default ParcelMachines