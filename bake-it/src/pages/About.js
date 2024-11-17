import React from 'react';
import aboutImage from '../assets/images/custom-cake.jpeg';

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>We are a family-owned bakery, passionate about crafting the most delightful cakes for you!</p>
    <img src={aboutImage} alt="About Us" style={{ width: '100%', borderRadius: '10px' }} />
  </div>
);

export default About;