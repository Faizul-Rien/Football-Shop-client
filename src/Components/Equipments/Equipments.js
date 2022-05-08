import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Equipment from '../Equipment/Equipment';
import './Equipments.css';

const Equipments = () => {
    const [equipments, setEquipments] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/equipment')
        .then(res=> res.json())
        .then(data => setEquipments(data))
    },[])
    return (
        <div>
           <h2 className='title'> Football Equipments</h2>
           <div className='equipment-container'>
            {
                equipments.slice((0,3)).map((equipment)=> (
                 <Equipment 
                 key={equipment._id}
                 equipment={equipment}></Equipment>   
                ))
            }
           </div>
           <Link className='link-btn' to='/manage'>All Equipment</Link>
        </div>
    );
};

export default Equipments;