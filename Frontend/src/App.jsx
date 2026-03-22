import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/signup" element={<UserSignup/>} />
        <Route path="/captain/login" element={<Captainlogin/>} />
        <Route path="/captain/signup" element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App
