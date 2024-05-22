import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from './Pin';
import { listData } from '../lib/dummydata';





const Map = ({items}) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='w-[100%] h-[100%] rounded-md' >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      listData.map(item => <Pin {...item} key={item.id}/>)
    }
  </MapContainer>
  )
}

export default Map