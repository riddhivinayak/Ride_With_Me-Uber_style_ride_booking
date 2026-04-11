import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { getToken, removeToken } from '../utils/auth'

const CaptainProtectWrapper = ({ children }) => {

    const token = getToken()

    useEffect(() => {

        if (!token) {
            navigate('/captains/login')
            return;
        }

        api.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`)
        .then((response) => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
            }
            setIsLoading(false)
        })
        .catch((err) => {
            console.error(err)
            removeToken('captain')
            navigate('/captains/login')
            setIsLoading(false)
        })

    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return children
}

export default CaptainProtectWrapper