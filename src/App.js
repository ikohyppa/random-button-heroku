import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [random, setRandom] = useState(0);

  const getRandom = () => {
    const newRandom = Math.floor(Math.random() * 100);
    setRandom(newRandom);
  };
  return (
    <div className='App'>
      <button onClick={getRandom}>Press to get random number</button>
      <h3>{random}</h3>
    </div>
  );
};

export default App;
