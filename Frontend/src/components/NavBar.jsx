import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { logout } from '../api/user.api.js';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user || "User");
  const navigate = useNavigate()
  const logoutt = ()=>{
      logout()
      navigate({to:"/"})
  }
  // console.log(userName.user.name)
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left side - App Name */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/" className="text-xl font-bold text-gray-800">
            URL Shortener
        </Link>
      </div>

      {/* Right side - Login link */}
      <div className='flex items-center'>
        {isAuthenticated ? (
            <div className='flex items-center space-x-4'>

                <span className='text-gray-700'>Welcome {userName ? userName.user.name : "User"}</span>
                <button
                    onClick={logoutt}
                    className="bg-red-500 hover:bg-red-600 text-white px-4">
                        Logout
                </button>
                </div>
        ) : (
            <Link to="/auth"
            className='bg-blue-500 hover-bg-blue-600 text-white px-4'
            >
                Login
            </Link>
        )
        }
       
      </div>
    </nav>
  );
};

export default Navbar;
