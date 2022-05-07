import React, { useEffect, useState } from 'react';

const MostPopular = () => {
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        fetch('popular.json')
        .then(res=> res.json())
        .then(data => setPopular(data))
    },[])
    return (
        <div>
            <h2>Most Popular</h2>
           
        </div>
    );
};

export default MostPopular;