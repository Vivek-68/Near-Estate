import React from 'react'
import Searchbar from '../components/Searchbar'

const HomePage = () => {
  return (
    <div className='flex'>
        <div className=' flex flex-col min-h-[600px] justify-center w-[60%] gap-4'>
            <h1 className='max-[350px]:text-3xl max-[450px]:text-5xl text-6xl mono-medium mt-[3rem]'>Find the perfect place to live</h1>
            <h2 className='max-[350px]:text-[14px] mono-light '>Welcome to NearEstate where the journey to finding your perfect home begins! We understand
                that a home is more than just four walls, it's where memories are made, and dreams take shape.
            </h2>
            <Searchbar/>
        </div>
        
        <div></div>
        
    </div>
  )
}

export default HomePage