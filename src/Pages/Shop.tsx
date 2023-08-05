import Navbar from '@/layout/Navbar/Navbar';
import React from 'react';
import logo from "../assets/Logo/logo_250x80_crop_center@2x.webp"
import { SlHandbag } from 'react-icons/sl';
const Shop = () => {
    return (
        <div>
            <Navbar />
            <div className='w-11/12 mx-auto bg-white mt-32'>
                <div className='w-10/12 mx-auto pt-16 flex items-center pb-20'>
                    <div>
                        <img src={logo} alt="" />
                        <h1 className='text-3xl  text-secondary tracking-wider ml-8 mt-2'>Online Store</h1>
                    </div>
                    <div className="bg-info border-b-2 border-primary relative overflow-hidden w-5/12 p-0 mx-auto">
                        <input
                            type="text"
                            className=" placeholder-secondary border-none px-6 text-xl font-mono input py-4 w-full text-secondary"

                            placeholder="Search Your Books"
                        />
                        <h1 className="p-5 absolute uppercase -top-2 right-0 text-white bg-primary text-md ">
                            Search
                        </h1>
                    </div>
                    <div>
                        <div className='flex relative items-center gap-4 text-xl'>
                            {/* <h1 ><AiOutlineShoppingCart /></h1>
                            <h1 className='text-sm tracking-wide'>Shopping cart :</h1> */}
                            <h1 className='text-5xl relative cursor-pointer'><SlHandbag /></h1>
                            <p className=' absolute top-9 left-8 cursor-pointer px-3 text-white py-[3px] bg-primary rounded-full'>0</p>
                            <div className='ml-2'>
                                <h1 className='text-md font-semibold text-secondary tracking-wider font-mono'>My Cart</h1>
                                <h1 className='text-sm font-semibold text-primary'>$ 00. 00</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Shop;