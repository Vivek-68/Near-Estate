import React from 'react'

const HomePage = () => {
  return (
    <div className='flex'>
        <div className='[height:calc(100vh-150px)] flex flex-col justify-center w-[60%] gap-4'>
            <h1 className='max-[350px]:text-3xl max-[450px]:text-5xl text-6xl mono-medium'>Find the perfect place to live</h1>
            <h2 className='max-[350px]:text-[14px] mono-light'>Welcome to NearEstate where the journey to finding your perfect home begins! We understand
                that a home is more than just four walls, it's where memories are made, and dreams take shape.
            </h2>
        </div>
        <div></div>
    </div>
  )
}

export default HomePage