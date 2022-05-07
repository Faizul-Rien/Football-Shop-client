import React from 'react';
import banner from '../../Images/f-banner.jpeg';
import Equipments from '../Equipments/Equipments';

const Home = () => {
    return (
        <div>
            <img className='w-100 mb-5' src={banner} alt="banner" />
            <Equipments></Equipments>

        </div>
    );
};

export default Home;