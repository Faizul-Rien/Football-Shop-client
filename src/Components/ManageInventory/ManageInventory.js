import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Manage from './Manage';

const ManageInventory = () => {
    

        const [equipment, setEquipment] = useState([])
        useEffect(()=>{
            fetch(`http://localhost:5000/equipment`)
            .then(res => res.json())
            .then(data => setEquipment(data))
        },[])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

    const url = `http://localhost:5000/equipment`;
    fetch(url,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result => console.log(result))
}
    return (
        <div>
            <div className='w-25 mx-auto'>
            <h2 className='mt-5'>Add New Equipment</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2 mt-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Photo Url' {...register("img")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input type="submit" value= "Add Equipment" />
    </form>
    </div>

            <div className='equipment-container mt-5'>
                {
                    equipment.map((equipment)=>(
                        <Manage
                        key={equipment._id}
                        equipment={equipment}
                        ></Manage>
                        
                    ))
                }
            </div>

       
        </div>
    );
};

export default ManageInventory;