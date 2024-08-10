import React from 'react'
import avtar from '../assets/avtar.jfif'

function Avatar() {
  return (
    <div className="w-14 h-14 bg-gray-500 rounded-full overflow-hidden">
        <img src={avtar} alt="Avatar" className="w-full h-full object-cover"/>
    </div>

  )
}

export default Avatar