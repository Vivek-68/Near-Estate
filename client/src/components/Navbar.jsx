import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[7.5rem] flex justify-between items-center max-[900px]:gap-6'>
        <div className='flex justify-between  items-center lg:gap-16 w-[65%] max-[900px]:text-[14px]'>
            <a className='max-[900px]:hidden '><span className='text-4xl mono-medium text-lilac'>NearEstate</span></a>
            <a className='line-height-[.5rem]'>Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className='flex justify-end items-center gap-8 lg:gap-16 w-[35%] max-[900px]:text-[14px]'>
            <a href="">Sign in</a>
            <a href="" className='text-white bg-lilac rounded-md px-4 py-2'>Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar