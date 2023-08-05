import Banner from '@/Components/Banner';
import About from '@/Components/About';
import Shop from '@/Components/Shop';
import React from 'react';
import Features from '@/Components/Features';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Shop />
            <Features />
        </div>
    );
};

export default Home;