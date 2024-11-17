import React from 'react';
import chocolateCake from '../assets/images/chocolate-cake.jpeg';

const Cart = () => (
  <div>
    <h2>Shopping Cart</h2>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img src={chocolateCake} alt="Cart Item" style={{ width: '100px', borderRadius: '10px' }} />
      <p>Chocolate Cake - Quantity: 2</p>
    </div>
  </div>
);

export default Cart;