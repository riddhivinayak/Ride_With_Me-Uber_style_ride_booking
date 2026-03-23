import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captaindata, setCaptaindata] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const { data } = await axios.post('/captain/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Login successful
      localStorage.setItem('token', data.token)
      setCaptaindata(data.captain)
      setEmail('')
      setPassword('')
      alert('Captain login successful!')
    } catch (error) {
      console.error('Captain login error:', error)
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Captain login failed')
      } else {
        alert('An error occurred during captain login')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Uber Logo */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-2">Uber</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back, Captain</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your captain account
          </p>
        </div>

        {/* Login Form */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Login Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150"
                >
                  Sign in as Captain
                </button>
              </div>

              {/* Signup Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  New to Uber as Captain?{' '}
                  <Link
                    to="/captain/signup"
                    className="font-medium text-black hover:text-gray-800 transition duration-150"
                  >
                    Create a captain account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* User Login Link - Separate at bottom */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Want to ride with Uber?{' '}
            <Link
              to="/user/login"
              className="font-medium text-black hover:text-gray-800 transition duration-150"
            >
              Sign in as User
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainLogin
