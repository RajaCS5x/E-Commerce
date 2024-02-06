import React from 'react';
import styles from './Cart.module.css'
import { Container } from 'react-bootstrap';
import CartLayout from './CartLayout';

function Cart({ items, removeFromCart }) {
  return (
    <Container className={styles.container}>
      {items.map((item) => (
        <CartLayout item={item} removeFromCart={removeFromCart}/>
      
    ))}
    </Container>
  );
}

export default Cart;