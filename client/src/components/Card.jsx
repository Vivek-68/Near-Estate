import React from 'react'

const Card = ({title,img,price,address,bathroom,bedroom,latitude,longitude}) => {
  return (
    <div className='h-[12rem] flex gap-4'>
        <img src={img} alt='image failed to load' className='w-[40%] object-cover rounded-lg'/>
        <div className='flex flex-col justify-between'>
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