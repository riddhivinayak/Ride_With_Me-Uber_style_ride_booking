import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [captaindata, setCaptaindata] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // Validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }

    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()
      if (!firstName || !lastName) {
        alert('Please enter both first name and last name')
        return
      }

      const { data } = await axios.post('/captain/register', { name: fullName, email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Registration successful
      localStorage.setItem('token', data.token)
      setCaptaindata(data.captain)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      alert('Captain registration successful!')
    } catch (error) {
      console.error('Captain registration error:', error)
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Captain registration failed')
      } else {
        alert('An error occurred during captain registration')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Uber Logo */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-2">Uber</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Create your captain account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us as a captain and start earning
          </p>
        </div>

        {/* Signup Form */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1 grid grid-cols-2 gap-3">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="First name"
                  />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  What's your email
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
                  Set a password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm your password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              {/* Signup Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150"
                >
                  Create captain account
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have a captain account?{' '}
                  <Link
                    to="/captains/login"
                    className="font-medium text-black hover:text-gray-800 transition duration-150"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
