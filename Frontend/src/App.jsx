import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './Pages/Start'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
import UserProtectedWrapper from './Pages/UserProtectedWrapper'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/signup" element={<UserSignup/>} />
        <Route path="/captain/login" element={<Captainlogin/>} />
        <Route path="/captain/signup" element={<CaptainSignup/>} />
        <Route path ="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
