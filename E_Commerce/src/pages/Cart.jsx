import React from 'react';

import { Container } from 'react-bootstrap';
import CartLayout from './CartLayout';

function Cart({ items, removeFromCart }) {
  return (
    <Container>
      {items.map((item) => (
        <CartLayout item={item} removeFromCart={removeFromCart}/>
      
    ))}
    </Container>
  );
}

export default Cart;