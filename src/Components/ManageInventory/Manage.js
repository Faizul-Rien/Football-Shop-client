import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Manage = ({equipment}) => {
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
<Button variant="danger">Delete</Button>
</Card.Body>
</Card>

    </div>
    );
};

export default Manage;