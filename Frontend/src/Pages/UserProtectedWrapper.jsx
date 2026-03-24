import React, { useEffect } from 'react'
import { UserdataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children
}) => {
  const { user } = React.useContext(UserdataContext)
const navigate = useNavigate()
const token = localStorage.getItem('token')
   useEffect(() => {
    if (!token) {
      navigate('/users/login')
    } })
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
