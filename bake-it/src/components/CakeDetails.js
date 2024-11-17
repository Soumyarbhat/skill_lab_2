import React from 'react';
import { useParams } from 'react-router-dom';
import chocolateCake from '../assets/images/chocolate-cake.jpeg';

const CakeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Cake Details</h2>
      <img src={chocolateCake} alt="Selected Cake" style={{ width: '300px', borderRadius: '10px' }} />
      <p>ID: {id}</p>
      <p>Details about the selected cake will be displayed here.</p>
    </div>
  );
};

export default CakeDetails;