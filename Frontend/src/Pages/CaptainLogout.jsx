
import React from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../utils/auth'

export const CaptainLogout = () => {
    const navigate = useNavigate()

    api.get(`${import.meta.env.VITE_API_URL}/captains/logout`).then((response) => {
        if (response.status === 200) {
            removeToken('captain')
            navigate('/captains/login')
        }
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout