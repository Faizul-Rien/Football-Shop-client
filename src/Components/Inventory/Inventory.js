import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Inventory.css';

const Inventory = () => {

  const { register, handleSubmit } = useForm();
    const onSubmit = data =>(
        console.log(data));
    
    const { inventoryId } = useParams();
    const [equip, setEquip] = useState({})
    useEffect(()=>{
      const url = `https://still-brushlands-73220.herokuapp.com/equipment/${inventoryId}`
      fetch(url)
      .then(res=> res.json())
      .then(data => setEquip(data))
    },[])
    return (
      <div>
        <div>
           <Link className='link-button' to='/manage'>All Equipment</Link>
        </div>
       <div className='container-form'>
       <div className='inventory-container w-50 mx-auto'>
      <img className='image' src={equip.img} alt="" />

       <h2>{equip.name}</h2>
        <p>${equip.price}</p>
        <p>Quantity : {equip.quantity}</p>
        <p> Supplier : {equip.supply}</p>
        <p>Description : {equip.description}</p>
        <button className='delivered-btn'>Delivered</button>
     </div>
     <div>
     <form className='d-flex flex-column w-25 mt-5 form-box' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
      <input type="submit" value= "Add Quantity" />
    </form>
     </div>
       </div>
      </div>
    );
};

export default Inventory;