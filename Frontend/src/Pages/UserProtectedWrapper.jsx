import React, { use } from 'react'
import { UserdataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const UserProtectedWrapper = ({ children
}) => {
  const { user } = React.useContext(UserdataContext)
const navigate = useNavigate()
const token = localStorage.getItem('token')
  if(!token){
    navigate('/user/login')
  }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
