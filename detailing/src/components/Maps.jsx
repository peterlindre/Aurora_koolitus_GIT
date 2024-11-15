import React from 'react';
import L from 'leaflet';
 import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//  import icon from 'leaflet/dist/images/marker-icon.png';
import icon from './car.marker.png';
//  import iconShad ow from 'leaflet/dist/images/marker-shadow.png';
 import ChangeView from './ChangeView';
 let DefaultIcon = L.icon({
   iconUrl: icon,
  //  shadowUrl: iconShadow,
   iconSize: [25,25], 
   iconAnchor: [12,41],
   popupAnchor: [2, -40],
 });
 L.Marker.prototype.options.icon = DefaultIcon;
 
 function Map(props) { 
 
   return (
   <div className='maps-text'>
 
     <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
       <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
      
      
       <Marker position={[59.3934, 24.7186]}>
         <Popup>
         Pärnu mnt. 238 <br /> Avatud E-R 9:00-18:00 <br />
           <a 
           target ='_blank'
           rel= "noreferrer"
           href="https://www.google.com/maps/place/Järve+Keskus/@59.3934346,24.7186861,450m/data=!3m2!1e3!4b1!4m6!3m5!1s0x469294df1251b9e9:0x95fcb21812d70be4!8m2!3d59.3934319!4d24.721261!16s%2Fm%2F0w7qf86?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D">
           Pärnu mnt. 238, 11624 Tallinn
           </a>
         </Popup>
       </Marker>
     </MapContainer>
   </div>)
 }
 
 export default Map; 