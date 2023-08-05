import React from 'react';
import logo from "../assets/Logo/logo-dark.png"
import footImg from "../assets/Background/single-image-03.png"
import SocialMedia from './Ui/SocialMedia';
const Footter = () => {
    return (
        <div className='background h-screen'>
            <div className='flex justify-center mt-32'>
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center justify-center gap-14 font-medium uppercase mt-10 text-lg tracking-wider text-neutral'>
                <h1>About us</h1>
                <h1>Advertise</h1>
                <h1>Contact</h1>
                <h1>Privacy Police</h1>
                <h1>Submission Guiedline</h1>
            </div>
            <div className='flex justify-center mt-14'>
                <img className='' src={footImg} alt="" />
            </div>
            <div>
                <SocialMedia />
            </div>
            <h1 className='text-lg text-center text-[#696969] mt-6 tracking-wider'>    © 2018 Auteur. All Rights Reserved(+68) 120034509info@yourdomain.com</h1>
        </div>
    );
};

export default Footter;