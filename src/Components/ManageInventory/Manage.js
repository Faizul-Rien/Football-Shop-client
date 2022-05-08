import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Manage = ({equipment}) => {
    const [ setEquipment] = useState({})

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url =`http://localhost:5000/equipment/${id}`;
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
<Card.Body>
<Card.Title>{name}</Card.Title>
<Card.Text>${price}</Card.Text>
<Card.Text>Quantity : {quantity}</Card.Text>
<Card.Text> Supplier : {supply}</Card.Text>
<Card.Text>Description : {description}</Card.Text>
<Button variant="danger" onClick={()=> handleDelete(equipment._id)}>Delete</Button>
</Card.Body>
</Card>

    </div>
    );
};

export default Manage;