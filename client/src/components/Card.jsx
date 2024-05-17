import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,img,price,address,bathroom,bedroom,latitude,longitude,id}) => {
  return (
    <div className='h-[12rem] flex  gap-4'>
      
        <Link to={`/${id}`} className='w-[40%] object-cover'>
        <img src={img} alt='image failed to load' className='w-[100%] rounded-lg'/>
        </Link>
      
        <div className='flex flex-col justify-between w-[60%]'>
            <h2 className='mono-medium text-xl'>{title}</h2>
            <p className='text-gray-500'>{address}</p>
            <p>{'$' + price}</p>
            <div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    </div>
  )
}

export default Card