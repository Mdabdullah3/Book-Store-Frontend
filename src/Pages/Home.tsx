import Banner from '@/Components/Banner';
import About from '@/Components/About';
import Shop from '@/Components/Shop';
import React from 'react';
import Features from '@/Components/Features';
import Blog from '@/Components/Blog';
import Footter from '@/Components/Footter';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Shop />
            <Features />
            <Blog />
            <Footter />
        </div>
    );
};

export default Home;