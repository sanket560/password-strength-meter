import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { Link , NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='text-gray-600 body-font shadow-md '>
      <div className='max-w-7xl mx-auto flex flex-wrap px-5 h-16 flex-col md:flex-row items-center'>
        <Link
          to={"/"}
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <RiLockPasswordFill className='text-2xl text-red-400' />
          <span className='ml-3 text-xl'>Password Strength Meter</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <NavLink
            to={"system-generated"}
            className={`mr-5 hover:text-blue-400 transition-all duration-300 `}
          >
            System Generated Password
          </NavLink>
          <NavLink
            to={"custom-password"}
            className='mr-5 hover:text-blue-400 transition-all duration-300 '
          >
            Custom Password
          </NavLink>
        </nav>
        <Link to={"https://sanketmane.tech"}>
          <button className='inline-flex items-center text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600  rounded text-base mt-4 md:mt-0'>
            Developer
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header