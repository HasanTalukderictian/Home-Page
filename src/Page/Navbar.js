import React from 'react';
import logo from '../assests/logo.PNG';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navOptions = (
      <>
        <li className='text-xl text-teal-300'><Link to='/about'>ABOUT</Link></li>
        <li className='text-xl text-teal-300'><Link to='/partner'>Partners</Link></li>
        <li className='text-xl text-teal-300'><Link to="/service">Service +</Link></li>
        <li className='text-xl text-teal-300'><Link to='/product'>Products</Link></li>
        <li className='text-xl text-teal-300'><Link to='/quality'>Quality Service</Link></li>
        <li className='text-xl text-teal-300'><Link to='/experience'>Experience</Link></li>
        <li className='text-xl text-teal-300'><Link to='/technology'>Technology</Link></li>
      </>
    );
  
    return (
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;