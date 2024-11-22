import React from 'react';

import './App.css';
import Dropdown from './components/dropdown/Dropdown';

const App = () => {
  const items = [
    'A magical city escape 🪄',
    'A luxurious beach resort 🏖️',
    'A thrilling jungle safari 🐅',
    'A cozy cabin in the mountains 🏔️',
  ];

  return (
    <div className="app-container">
      <h1>What's your dream vacation destination?</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
