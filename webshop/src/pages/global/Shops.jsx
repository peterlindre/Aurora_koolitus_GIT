import React, { useState } from 'react'
import Map from '../../components/Maps'

function Shops() {
  const [coordinaates, setCoordinaates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  return (
    <div>
      
       <button onClick={() => setCoordinaates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
       <button onClick={() => setCoordinaates({lngLat: [58.3875, 24.5040], zoom: 13})}>Port Artur 2</button>
       <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}

export default Shops