import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)'
      }}
    >
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        
        {/* Logo */}
        <div className="p-4 pt-8">
          <h1 className="text-white text-3xl font-extrabold tracking-wide">Uber</h1>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-6 text-center text-white">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Go anywhere with Uber
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-lg mx-auto leading-relaxed">
              Request a ride, hop on a scooter, grab food, or make that big move.
            </p>
          </div>
        </div>

        {/* 🔥 MODERN BUTTON */}
        <div className="p-6 pb-safe flex justify-center">
          <Link
            to="/user/login"
            className="bg-white text-black py-5 px-10 rounded-2xl text-center font-bold text-xl shadow-2xl hover:bg-gray-100 active:scale-95 transition-all duration-200 border-2 border-white/20 backdrop-blur-sm"
          >
            Continue
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Start