import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
  <div className='max-w-[85rem] m-auto px-5 md:px-20 '>
    <Navbar/>
    <Outlet />
  </div>
  )
}

export default Layout