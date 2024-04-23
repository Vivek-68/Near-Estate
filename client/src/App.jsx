import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='max-w-[85rem] m-auto px-5 md:px-20 '>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App