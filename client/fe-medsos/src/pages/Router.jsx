import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/s' element={<SideBar/>}/>
    </Routes>
  )
}

export default Router