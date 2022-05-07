import React from 'react';
import Header from '../Header/Header';
import banner from '../../Images/f-banner.jpeg';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <img className='w-100 mb-5' src={banner} alt="banner" />

        </div>
    );
};

export default Home;