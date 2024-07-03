import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,images,price,address,bathroom,bedroom,latitude,longitude,id}) => {
  return (
    <div className='min-h-[12rem] gap-4 max-[600px]:flex-col flex overflow-clip '>
      
        <Link to={`/${id}`} className='w-[40%] h-[100%] max-[600px]:w-[100%] object-cover'>
        <img src={images && images[0]} alt='image failed to load' className='w-[100%] h-[100%] min-[601px]:max-h-[8rem] lg:max-h-[15rem] object-cover rounded-lg'/>
        </Link>
      
        <div className='flex flex-col justify-between w-[60%] max-[600px]:w-[100%]'>
            <h2 className='mono-medium  sm:text-xl '>{title}</h2>
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