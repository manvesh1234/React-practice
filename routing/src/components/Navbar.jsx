import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-5 p-5'>
      
      <NavLink 
        to='/' 
        className={({ isActive }) => isActive ? "text-blue-500" : ""}
      >
        Home
      </NavLink>

      <NavLink 
        to='/about' 
        className={({ isActive }) => isActive ? "text-blue-500" : ""}
      >
        About
      </NavLink>

      <NavLink 
        to='/courses' 
        className={({ isActive }) => isActive ? "text-blue-500" : ""}
      >
        Courses
      </NavLink>

    </div>
  )
}

export default Navbar