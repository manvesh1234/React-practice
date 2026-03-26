import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  
const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between p-5'>
        <button className='py-2.5 px-5 bg-[#20B2AA] text-white font-medium rounded-lg shadow hover:bg-[#1aa39c] transition cursor-pointer'onClick={() => {navigate('/courses')}}>
          Explore Courses
        </button>
    </div>
  )
}

export default Footer