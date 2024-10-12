import React from 'react';
import L from 'leaflet';
 import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//  import icon from 'leaflet/dist/images/marker-icon.png';
import icon from './map-marker.png';
//  import iconShadow from 'leaflet/dist/images/marker-shadow.png';
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
   <div>
 
     <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
       <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={[59.4231, 24.7991]}>
         <Popup>
           Ülemiste keskus. <br /> Avatud 9-20
           <a 
           target ='_blank'
           rel= "noreferrer" //turvarisk tuleb juurde lisada, et tootaks
           href="https://www.google.com/maps/place/Ülemiste+keskus/@59.4219391,24.7912974,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb54f4edfe43:0x206e6dcbdf41435e!8m2!3d59.4219391!4d24.793867!16s%2Fm%2F0hrdb05?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
           Suur-Sõjamäe tn 4, 11415 Tallinn
           </a>
         </Popup>
       </Marker>
      
      
       <Marker position={[58.3875, 24.5040]}>
         <Popup>
           Port Artur 2 keskus. <br /> Avatud 11-21 <br />
           <a 
           target ='_blank'
           rel= "noreferrer"
           href="https://www.google.com/maps/place/Port+Artur+2/@58.38744,24.5014354,17z/data=!3m1!4b1!4m6!3m5!1s0x46ecfd23c5a5f967:0x4ddf3f80f0c6e99c!8m2!3d58.38744!4d24.504005!16s%2Fg%2F119w8msqc?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
           Lai 11, 80010, Pärnu
           </a>
         </Popup>
       </Marker>
     </MapContainer>
   </div>)
 }
 
 export default Map; 