import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Inventory = () => {
    const { inventoryId } = useParams();
    const [equip, setEquip] = useState({})
    useEffect(()=>{
      fetch('football.json')
      .then(res=> res.json())
      .then(data => setEquip(data))
    },[])
    return (
        
    <div className="inventoryId">
      <h2 className="title">Thank you for choosing Service Number : {inventoryId}</h2>
      <p>{equip.name}</p>
        </div>
    );
};

export default Inventory;