import React, { useEffect, useState } from 'react';
import Popular from './Popular/Popular';
import  './MostPopular.css';

const MostPopular = () => {
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        fetch('popular.json')
        .then(res=> res.json())
        .then(data => setPopular(data))
    },[])
    return (
        <div>
            <h2 className='mb-5 mt-5 title '>Most Popular</h2>
           <div className='equipment-container'>
           {
               popular.map((popular)=>(
                   <Popular
                   key={popular.id}
                   popular={popular}></Popular>
               ) )
           }
           </div>
        </div>
    );
};

export default MostPopular;