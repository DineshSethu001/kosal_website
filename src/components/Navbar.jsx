import React from 'react'
import 'boxicons/css/boxicons.min.css';
import 'boxicons'
import logo from '../assets/img/logo.png'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();
  return (
    <nav className="navbar w-full bg-white shadow-md z-50 flex border-none justify-around items-center font-medium px-4 py-2 rounded">
    <Link to="/">  <img src={logo} className="w-35 h-auto" alt="logo" /></Link>
      {/* Desktop view */}

      <ul className="hidden sm:flex text-gray-700 gap-5 text-sm ">
        <NavLink to="/about" className="flex gap-1 flex-col items-center">
          <p className='hover:text-[#FF7A30] tracking-wide'>
            About
          </p>
          <hr className='hidden border-none h-[1.5px] w-2/4 bg-gray-700 ' />
        </NavLink>
        <NavLink to="/services" className="flex gap-1 flex-col items-center">
          <p className='hover:text-[#FF7A30] tracking-wide'>
            Services
          </p>
          <hr className='hidden border-none h-[1.5px] w-2/4 bg-gray-700 ' />
        </NavLink>
        <NavLink to="/contact" className="flex gap-1 flex-col items-center">
          <p className=' hover:text-[#FF7A30] tracking-wide'>
            Contact
          </p>
          <hr className='hidden border-none h-[1.5px] w-2/4 bg-gray-700 ' />
        </NavLink>
        {/* <NavLink to="/products" className="flex gap-1 flex-col items-center">
          <p className='tracking-wide'>
            Products
          </p>
          <hr className='hidden border-none h-[1.5px] w-2/4 bg-gray-700 ' />
        </NavLink> */}
      </ul>
     {/* admin login */}
    {/* <div className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer" onClick={()=>navigate('/admin-login')}>
    <BiLogIn className='text-4xl hover:text-[#93DA97]' />
    <p>Admin Login</p>
    </div> */}

<div className="sm:hidden w-10 cursor-pointer ">
  <i
  onClick={()=>setVisible(true)} 
  className='bx bx-menu-alt-left text-4xl '></i>
  
</div>
      {/* mobile view icon */}
      {/* mobile view */}
       <div className={`absolute top-0 right-0 bottom-0 z-50 bg-white transition-all duration-500 ease-in-out ${visible ? "w-full px-4 py-6" : "w-0 px-0 py-0 overflow-hidden"}`}>
                <div className="flex flex-col text-gray-600">

                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/">
                        
                            <p className='flex items-center gap-2'>Home
                                <i className='bx bx-home-circle'></i>
                            </p>
                            <hr className='w-1/4 ' />
                        
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/services">
                      <p className='flex items-center gap-2' >SERVICES<i className='bx bx-run'></i></p>
                      <hr className='w-1/4 ' />
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/products">
                      <p className='flex items-center gap-2'>PRODUCTS<i className='bx bx-list-ul'></i></p>
                      <hr className='w-1/4 ' />
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/contact">
                      <p className='flex items-center gap-2'>CONTACT<i className='bx bx-phone-incoming'></i></p>
                      <hr className='w-1/4 ' />
                    </NavLink>
                </div>
            </div> 

    </nav>
  )
}

export default Navbar