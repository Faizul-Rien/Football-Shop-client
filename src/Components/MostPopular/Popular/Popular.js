import React from 'react';
import { Card } from 'react-bootstrap';

const Popular = ({popular}) => {
    const {img, name , price, supply, quantity, description}= popular;
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
  </Card.Body>
</Card>
        </div>
    );
};

export default Popular;