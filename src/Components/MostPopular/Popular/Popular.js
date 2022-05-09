import React from 'react';
import { Card } from 'react-bootstrap';

const Popular = ({popular}) => {
    const {img, name , price, supply, quantity, description}= popular;
    return (
             <div className='equipment-card'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{ height:'250px',}} src={img}/>
  <Card.Body className='card-container'>
    <h2>{name}</h2>
   <p className='price'>${price}</p>
    <p> <span className='common'>Quantity :</span> {quantity}</p>
    <p><span className='common'>Supplier :</span> {supply}</p>
    <p><span className='common'>Description :</span> <span className='descrip'>{description}</span> </p>
    
  </Card.Body>
</Card>
        </div>
    );
};

export default Popular;