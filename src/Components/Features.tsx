import React from 'react';
import featured from '../assets/img-02.png'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
const Features = () => {
    return (
        <div className='mt-28 w-11/12 mx-auto flex items-center justify-center'>
            <div className='flex-1'>
                <img className='w-[440px] ml-20' src={featured} alt="" />
            </div>
            <div className='flex-1 mt-20'>
                <h1 className='text-2xl tracking-wider text-primary -mt-4'>FEATURED BOOK</h1>
                <p className='text-6xl tracking-widest mt-6 w-8/12'>The Journey of Dreams.</p>
                <h2 className='mt-4 tracking-wider text-xl'>By: Farrah Whisenhunt</h2>

                <div className="rating mt-4">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                </div>
                <p className='text-primary text-2xl tracking-wide'>$12.00</p>
                <div className='mb-20 flex items-center -ml-1 gap-4  w-11/12 mx-auto'>
                    <button className='border px-4 py-2 border-[#696969] hover:bg-primary hover:text-white rounded-3xl text-sm tracking-wider text-[#484848] mt-4'><h1 className='flex items-center gap-2'><AiOutlineShoppingCart />Add To Cart</h1></button>
                    <div className="border px-4 py-2 bg-primary hover:bg-transparent border-[#696969] text-white rounded-3xl text-sm tracking-wider hover:text-[#484848] mt-4">
                        <button className="flex items-center gap-2">Add to Wishlist <AiOutlineHeart /> </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Features;