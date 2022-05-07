import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css';

const Equipments = () => {
    const [equipments, setEquipments] = useState([])
    useEffect( () =>{
        fetch('football.json')
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
                 key={equipment.id}
                 equipment={equipment}></Equipment>   
                ))
            }
           </div>
        </div>
    );
};

export default Equipments;