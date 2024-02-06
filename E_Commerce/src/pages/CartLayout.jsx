import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './CartLayout.module.css';

const CartLayout = ({ item, removeFromCart }) => {
  const { id, title, price, description, image } = item;

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} alt={title} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>{title}</Card.Title>
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