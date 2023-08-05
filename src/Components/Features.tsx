import React from 'react';
import featured from '../assets/img-02.png'
const Features = () => {
    return (
        <div className='mt-28 w-10/12 mx-auto flex items-center justify-center'>
            <div className='flex'>
                <img className='w-[420px]' src={featured} alt="" />
            </div>
            <div className='flex-1 ml-20'>
                <h1 className='text-2xl tracking-wider text-primary -mt-4'>FEATURED BOOK</h1>
                <p className='text-6xl tracking-widest mt-6 w-8/12'>The Journey of Dreams.</p>
                <h2 className='mt-4 tracking-wider text-xl'>By: Farrah Whisenhunt</h2>
                <p className=''>$12.00</p>
            </div>
        </div>
    );
};

export default Features;