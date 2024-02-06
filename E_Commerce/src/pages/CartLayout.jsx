import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CartLayout = ({ item, removeFromCart }) => {
  const { id, title, price, description, image } = item;

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <Card style={{ width: '12rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary" onClick={handleRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartLayout;