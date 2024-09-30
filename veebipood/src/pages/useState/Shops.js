import { useState } from 'react';
 import Map from '../../components/Map';
 
 function Shops() {
   const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
 
   return (<div>
     <button onClick={() => setCoordinates({lngLat: [58.8880, 25.5396], zoom: 6})}>Kõik poed</button>
     <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

     <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
     <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
     <button onClick={() => setCoordinates({lngLat: [58.3780, 26.7307], zoom: 13})}>Tasku</button>
     <button onClick={() => setCoordinates({lngLat: [58.3875, 24.5040], zoom: 13})}>Port Artur 2</button>

     

     <Map mapCoordinaates={coordinaates}  />
   </div>)
 }
 
 export default Shops;