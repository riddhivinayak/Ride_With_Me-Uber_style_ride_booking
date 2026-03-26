import React, { useEffect, useState, useContext } from 'react'
import { UserdataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({ children }) => {

  const { user, setUser } = useContext(UserdataContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    // 🚨 Step 1: No token → redirect immediately
    if (!token) {
      navigate('/users/login')
      return
    }

    // 🚨 Step 2: Verify token belongs to USER
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          setUser(response.data.user)
          setIsLoading(false)
        }
      })
      .catch(err => {
        // ❌ Token invalid OR not a user (maybe captain token)
        localStorage.removeItem('token')
        navigate('/users/login')
      })

  }, [token, navigate, setUser])

  // ⏳ Prevent UI flicker until auth is confirmed
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper