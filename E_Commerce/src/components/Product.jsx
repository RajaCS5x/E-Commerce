import React from 'react'
import {Card, Button} from 'react-bootstrap'
import styles from './Product.module.css'
function Product({item, addToCart}) {


  const { id, title, price, description, image ,inCart} = item;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} alt={title} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart} disabled={inCart}>
          {(inCart) ? 'Go to Cart' : 'Add to Cart'}
        </Button>
          
      </Card.Body>
    </Card>
  )
}

export default Product