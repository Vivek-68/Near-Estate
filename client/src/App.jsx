import React from 'react'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import { Routes , Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './RequireAuth'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/list' element={<ListPage/>} />
        <Route path='/:id' element = {<SinglePage/>} />
        
        <Route path='/register' element = {<RegisterPage/>} />
        <Route path='/login' element = {<LoginPage/>} />
      </Route>
      <Route path='/' element= {<RequireAuth/>}>
        <Route path='/profile' element = {<ProfilePage/>} />
      </Route>
    </Routes>
  )
}

export default App