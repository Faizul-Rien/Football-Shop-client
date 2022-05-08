import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Inventory = () => {
    const { inventoryId } = useParams();
    const [equip, setEquip] = useState({})
    useEffect(()=>{
      const url = `http://localhost:5000/equipment/${inventoryId}`
      fetch(url)
      .then(res=> res.json())
      .then(data => setEquip(data))
    },[])
    return (
        
    <div className="inventoryId">
      <h2>Name : {equip.name}</h2>
      
        </div>
    );
};

export default Inventory;