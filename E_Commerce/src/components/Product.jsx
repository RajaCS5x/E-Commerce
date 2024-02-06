import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Product({item}) {


  const { id, title, price, description, image } = item;

  const addToCart = () => {
    console.log(`Item ${id} added to cart`);
  };

  return (
    <Card style={{ width: '12rem', margin: '10px',padding:".6rem"}}>
      <Card.Img variant="top" src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover',border:'1px solid white',padding:'0rem' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product