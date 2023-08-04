import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/logo-dark.png"
const DesktopNav = () => {
    const navigation = <>
        <li className=' text-black  cursor-pointer'><Link to='/home'
            className='transition-all duration-300 uppercase'> Home</Link></li>
        <li className=' text-black  cursor-pointer uppercase'><Link to='/corporate'
            className='transition-all duration-300'>About </Link></li>
        <li className=' text-black  cursor-pointer uppercase'><Link to='/nonprofit'
            className='transition-all duration-300'> Shop</Link></li>
    </>
    const navigation2 = <>
        <li className=' text-black  cursor-pointer'><Link to='/weddings'
            className='transition-all duration-300 uppercase'> Blog</Link></li>

        <li className=' text-black  cursor-pointer uppercase'><Link to='/social'
            className='transition-all duration-300'> Contact</Link></li>
        <li className=' text-black  cursor-pointer uppercase'><Link to='/social'
            className='transition-all duration-300'> Login</Link></li>
    </>
    return (
        <nav className='w-10/12 mx-auto h-full flex items-center justify-evenly'>
            <div className='flex space-x-16 list-none font-medium items-center capitalize text-lg'>
                {navigation}
            </div>
            <div className=''>
                <a href='/' className=''>
                    <h3 className='w-48'> <img src={logo} alt="" /> </h3>
                </a>
            </div>
            <div className='flex space-x-16 font-medium items-center capitalize list-none text-lg'>
                {navigation2}
            </div>
        </nav>
    );
};

export default DesktopNav;