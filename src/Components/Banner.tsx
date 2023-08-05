import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules';
import Slide1 from "../assets/Banner/slider-01-1.png"
import Slide2 from "../assets/Banner/slider-01-3.png"
import Slide3 from "../assets/Banner/slider-01-4.png"
import Slide4 from "../assets/Banner/slider-01-5.png"
import Slide5 from "../assets/Banner/slider-01-2.png"
import partner from "../assets/Banner/partner-01.png"
import partner2 from "../assets/Banner/partner-02.png"
import partner3 from "../assets/Banner/partner-03.png"
const Banner = () => {

    return (
        <div id='home' className='bg-[#f4f3ec] h-screen pt-28 '>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className='flex w-11/12 justify-center mx-auto items-center h-screen'>
                            <div className="-mr-60 ml-28">
                                <div>
                                    <h1 className=' tracking-wide text-2xl uppercase font-medium text-neutral'>For Author & Writer</h1>
                                    <h1 className='mb-8 md:text-[66px] text-4xl mt-4 md:leading-[4.4rem] leading-none font-medium text-secondary w-8/12 md:tracking-wider tracking-normal'>Meet Your Next Favorite Book.</h1>
                                    <div className='flex items-center mb-8 gap-4'>
                                        <img src={partner} alt="" />
                                        <img src={partner2} alt="" />
                                        <img src={partner3} alt="" />
                                    </div>
                                    <button className='px-10 tracking-wider bg-primary btn rounded-sm text-white'>Learn More</button>
                                </div>
                            </div>
                            <div className='-mt-10'>
                                <img className='' src={Slide1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex w-11/12 justify-center mx-auto items-center h-screen'>
                            <div className="-mr-68 ml-28">
                                <div>
                                    <h1 className=' tracking-wide text-2xl uppercase font-medium text-neutral'>For Author & Writer</h1>
                                    <h1 className='mb-8 md:text-[66px] text-4xl mt-4 md:leading-[4.4rem] leading-none font-medium text-secondary w-8/12 md:tracking-wider tracking-normal'>The Most-Read Books Reviews of 2021</h1>

                                    <button className='px-10 tracking-wider bg-primary btn rounded-sm text-white'>Learn More</button>
                                </div>
                            </div>
                            <div className='flex -mt-20'>
                                <img className='-ml-60' src={Slide2} alt="" />
                                <img className='w-11/12' src={Slide3} alt="" />
                                <img className='w-11/12' src={Slide4} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex w-11/12 justify-center mx-auto items-center h-screen'>
                            <div className=" ml-28">
                                <div>
                                    <h1 className=' tracking-wide text-2xl uppercase font-medium text-neutral'>For Author & Writer</h1>
                                    <h1 className='mb-8 md:text-[66px] text-4xl mt-4 md:leading-[4.4rem] leading-none font-medium text-secondary w-10/12 md:tracking-wider tracking-normal'>Feature Book The Month.</h1>
                                    <div className='flex items-center mb-8 gap-4'>
                                        <img src={partner} alt="" />
                                        <img src={partner2} alt="" />
                                        <img src={partner3} alt="" />
                                    </div>
                                    <button className='px-10 tracking-wider bg-primary btn rounded-sm text-white'>Learn More</button>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Slide5} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;