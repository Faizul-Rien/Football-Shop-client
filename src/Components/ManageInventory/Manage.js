import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Manage = ({equipment}) => {
    const [ setEquipment] = useState({})

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url =`https://still-brushlands-73220.herokuapp.com/equipment/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => console.log(data))
            const remaining = equipment.filter(equipment => equipment._id !== id)
            setEquipment(remaining);

        }}
    const {_id, name, img, price, quantity, supply, description} = equipment;
    return (
        <div className='equipment-card'>
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" style={{ height:'250px',}} src={img}/>
<Card.Body className='card-container'>
    <h2 className='pro-h2'>{name}</h2>
   <p className='price'>${price}</p>
    <p> <span className='common'>Quantity :</span> {quantity}</p>
    <p><span className='common'>Supplier :</span> {supply}</p>
     <p><span className='common'>Description :</span> <span className='descrip'>{description}</span> </p>
<Button variant="danger" onClick={()=> handleDelete(equipment._id)}>Delete</Button>
</Card.Body>
</Card>

    </div>
    );
};

export default Manage;