import React from 'react';
import bannerImage from '../assets/images/home-banner.jpeg';

const Home = () => (
  <main>
    <h1>Welcome to Cake Shop</h1>
    <p>Welcome to Sweet Haven Cake Shop, where every bite is a celebration! 🎂✨

Indulge in our wide range of freshly baked cakes, pastries, and desserts, crafted with love and the finest ingredients. Whether you're planning a birthday, wedding, anniversary, or just want to treat yourself, we have the perfect dessert for every occasion.

From classic flavors to custom designs, our team is here to make your sweet dreams come true. Come in and let us add a little sweetness to your day! 🍰💕</p>
    <img src={bannerImage} alt="Cakes Banner" style={{ width: '100%', borderRadius: '10px' }} />
  </main>
);

export default Home;