import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header class='shadow sticky z-50 top-0'>
      <nav class='bg bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          {/* <Link to='/' className='flex items-center'>  </Link> */}
         <li>
            <NavLink to='/' className={({ isActive }) =>
              `${isActive ? "text-orange-600 font-bold" : "hover:text-green-600 font-bold"}`
            }>Home</NavLink> </li>
          <li>
            <NavLink to='/electric' className={({ isActive }) =>
              `${isActive ? "text-orange-600 font-bold" : "hover:text-green-600 font-bold"}`
            }>Electronic</NavLink> </li>
          <li>
            <NavLink to='/faishon' className={({ isActive }) =>
              `${isActive ? "text-orange-600 " : "hover:text-green-600 f"} font-bold`
            }>Faishon</NavLink>
            </li>
          <li>
            <NavLink to='/signup' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>SignUp</NavLink>
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Header