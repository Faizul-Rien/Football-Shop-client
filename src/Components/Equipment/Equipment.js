import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Equipment.css";
import { useNavigate } from "react-router-dom";

const Equipment = ({equipment}) => {

    const nevigate = useNavigate();
    
    const {_id, name, img, price, quantity, supply, description} = equipment;

    const handleInventory = (id) => {
        nevigate(`/inventory/${id}`);
    }
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
    <Button onClick={()=> handleInventory(_id)}  className='update-btn' >Update Stock</Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default Equipment;