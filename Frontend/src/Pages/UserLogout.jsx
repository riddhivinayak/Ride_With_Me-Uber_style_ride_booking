import React from 'react'
import api from '../services/api'
import { removeToken } from '../utils/auth'
const UserLogout = () => {
    api.get(`${import.meta.env.VITE_BASE_URL}/users/logout`).then((response) => {
        if(response.status === 200){
        removeToken('user')
        window.location.href = '/users/login';
        }
    });
  return (
    <div>
      
    </div>
  )
}

export default UserLogout
