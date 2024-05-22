import React, { useState } from 'react'
import {nanoid} from 'nanoid'


const Slider = ({images}) => {
  const [imageIndex,setImageIndex] = useState(null);
  const rightArrowClick = () =>{
    setImageIndex(prev => (prev+1)%images.length)
  }
  const leftArrowClick = () =>{
    setImageIndex(prev =>{
      if(prev != 0){
        return (prev-1)%images.length;
      }
      return images.length-1;
    } )
  }
  return (
    <div className='flex w-[100%] h-[175px] min-[375px]:h-[225px] min-[600px]:h-[350px] z-[100000]'>
      {
        imageIndex !== null &&
      <div className='absolute top-0 left-0  w-screen  h-screen bg-black z-10000 '>
        <div className='my-auto h-[100%] flex px-1 justify-center'>
          <div className='my-auto flex flex-grow-1'><img src='/icons/arrow.png' onClick={leftArrowClick} className='max-h-[12rem]'/></div>

        <div className='flex flex-grow-10'>
          <img src={images[imageIndex]} className='w-[70%] m-auto' alt="Could not load image" />
        </div>
        <div className='my-auto flex flex-grow-1 rotate-180'><img src='/icons/arrow.png' onClick={rightArrowClick} className='max-h-[12rem]'/></div>
        </div>
       <div className='text-white absolute font-bold top-0 right-0 [font-size:clamp(.5rem,1vw+2rem,4rem);] p-4 pr-8 max-[450px]:pr-4 md:pr-16'><span className='cursor-pointer' onClick={()=>setImageIndex(null)}>X</span></div> 
      </div>
}
    <div className='w-[100%] flex justify-between gap-2'>
    <div className='flex w-[80%]'>
        <img onClick={()=> setImageIndex(0)} src={images[0]} className='rounded-md w-[100%] ' alt='Could not load image' />
      </div>
      <div className='flex flex-col  h-[100%] justify-between'>
        {
          images.slice(1).map((image,i) => <img onClick={()=> setImageIndex(i+1)} src={image} className='h-[30%]  rounded-md' key={nanoid(9)}/>)
        }
      </div>
    </div>
      
    </div>
    
  )
}

export default Slider