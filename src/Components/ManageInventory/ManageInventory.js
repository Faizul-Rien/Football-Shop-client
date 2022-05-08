import React from 'react';
import { useForm } from "react-hook-form";

const ManageInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2 mt-5' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Photo Url' {...register("img")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input type="Add Equipment" />
    </form>
        </div>
    );
};

export default ManageInventory;