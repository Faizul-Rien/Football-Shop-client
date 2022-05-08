import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './Inventory.css';

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
      <div className='inventory-container w-25 mx-auto'>
      <img src={equip.img} style={{ height:'250px', width:"18rem"}} alt="" />

       <h2>{equip.name}</h2>
        <p>${equip.price}</p>
        <p>Quantity : {equip.quantity}</p>
        <p> Supplier : {equip.supply}</p>
        <p>Description : {equip.description}</p>
        <button className='delivered-btn'>Delivered</button>

  </div>
    );
};

export default Inventory;