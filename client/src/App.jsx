import React from 'react'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import { Routes , Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/list' element={<ListPage/>} />
        <Route path='/:id' element = {<SinglePage/>} />
      </Route>
    </Routes>
  )
}

export default App