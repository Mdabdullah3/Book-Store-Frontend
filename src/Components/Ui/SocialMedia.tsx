import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { BsDribbble } from 'react-icons/bs';
import { GrFacebookOption, GrTwitter } from "react-icons/gr"
const SocialMedia = () => {
    return (
        <div className='flex mt-20 justify-center gap-5 text-secondary'>
            <h1 className='p-4 border border-[#696969] rounded-full text-lg'><GrFacebookOption /></h1>
            <h1 className='p-4 border border-[#696969] rounded-full text-lg'><GrTwitter /></h1>
            <h1 className='p-4 border border-[#696969] rounded-full text-lg'><AiOutlineInstagram /></h1>
            <h1 className='p-4 border border-[#696969] rounded-full text-lg'><FaWhatsapp /></h1>
            <h1 className='p-4 border border-[#696969] rounded-full text-lg'><BsDribbble /></h1>
        </div>
    );
};

export default SocialMedia;