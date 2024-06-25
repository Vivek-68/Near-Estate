import React from 'react'
import { Marker,Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

const Pin = ({latitude,longitude,title,bedroom,price,images,id}) => {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className='flex pr-8 gap-1'>
        <img src={images[0]} alt="Could not load image" className='w-[64px] h-[48px] object-cover' />
        <div className='flex flex-col '>
        <Link to={`/${id}`}>{title}</Link>
        <b>{bedroom} Bedrooms</b>
        <b>${price}</b>
        </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin