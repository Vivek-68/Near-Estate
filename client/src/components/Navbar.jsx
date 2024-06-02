import React, { useState } from 'react'
import { userData } from '../lib/dummydata';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  const user = null;
  return (
    <>
    <nav className='h-[7.5rem] hidden md:flex justify-between items-center max-[900px]:gap-6 '>
        <div className='flex justify-between  items-center lg:gap-12 min-[1200px]:gap-16 w-[65%] max-[900px]:text-[14px]'>
            <Link to='/' className='max-[900px]:hidden '><span className='text-4xl mono-medium text-lilac'>NearEstate</span></Link>
            <a className='line-height-[.5rem]'>Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        {
          user?
          <div className='flex justify-end items-center gap-6 lg:gap-8 w-[35%] max-[900px]:text-[14px] ml-3'>
        
            <Link className='flex items-center gap-2' to= '/profile'>
            <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
            <p className='font-semibold'>{userData.name}</p>
            </Link>
            <Link to="/profile" className='text-white bg-lilac rounded-md px-4 py-2'>Profile</Link>
            <span className='w-[1.5rem] h-[1.5rem]  text-center rounded-full text-white bg-red-500 relative bottom-4 right-9 lg:right-12'>3</span>
          
        </div>
          :
        <div className='flex justify-end items-center gap-8 lg:gap-16 w-[35%] max-[900px]:text-[14px]'>
        
            <Link to="/login">Sign in</Link>
            <Link to="/register" className='text-white bg-lilac rounded-md px-4 py-2'>Sign up</Link>
          
        </div>
}
    </nav>

    <nav className={openMenu?'md:hidden top-0 bg-lilac h-screen w-1/2 fixed right-[-50%] transition ease-in-out duration-300 -translate-x-full':'md:hidden bg-lilac h-screen w-1/2 fixed right-[-50%] transition'}>
      
      <div className='fixed top-6 right-4 sm:top-8 sm:right-8' onClick={()=> setOpenMenu(prev => !prev)}>
        <div className={openMenu?'border-2 w-8 border-white mb-[.375rem] min-[500px]:mb-2':'border-2 w-8 border-lilac mb-[.375rem] min-[500px]:mb-2'}></div>
        <div className={openMenu?'border-2 w-8 border-white  min-[500px]:mb-2':'border-2 w-8 border-lilac'}></div>
      </div>
      
     
      <ul className='h-[75%] flex flex-col p-8 pt-16 gap-8 items-center text-[18px]'>
        <li><a href="" className='text-white'>Home</a></li>
        <li><a href="" className='text-white'>About</a></li>
        <li><a href="" className='text-white'>Contact</a></li>
        <li><a href="" className='text-white'>Agents</a></li>
        <li><a href="" className='text-white'>Sign in</a></li>
        <li><a href="" className='text-white'>Sign up</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar