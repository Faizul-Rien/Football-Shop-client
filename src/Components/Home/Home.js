import React from 'react';
import banner from '../../Images/f-banner.jpeg';
import Equipments from '../Equipments/Equipments';
import News from '../FootballNews/News';
import Footer from '../Footer/Footer';
import MostPopular from '../MostPopular/MostPopular';

const Home = () => {
    return (
        <div>
            <img className='w-100 mb-5' src={banner} alt="banner" />
            <Equipments></Equipments>
            <MostPopular></MostPopular>
            <News></News>
            <Footer></Footer>

        </div>
    );
};

export default Home;