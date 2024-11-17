import React from 'react';
import chocolateCake from '../assets/images/chocolate-cake.jpeg';
import fruitCake from '../assets/images/fruit-cake.jpeg';
import customCake from '../assets/images/custom-cake.jpeg';

const Categories = () => (
  <div>
    <h2>Cake Categories</h2>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={chocolateCake} alt="Chocolate Cake" style={{ width: '200px', borderRadius: '10px' }} />
        <p>Chocolate Cakes</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={fruitCake} alt="Fruit Cake" style={{ width: '200px', borderRadius: '10px' }} />
        <p>Fruit Cakes</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={customCake} alt="Custom Cake" style={{ width: '200px', borderRadius: '10px' }} />
        <p>Custom Cakes</p>
      </div>
    </div>
  </div>
);

export default Categories;