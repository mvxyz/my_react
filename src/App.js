import React from 'react';
import './App.css';
import Car from './Car/Car'

function App() {

  const divStyle = {
    textAlign: 'center'
  }

  return (
    <div style={divStyle}>
      <h1 style={{ color: 'blue', fontSize: '50px' }}>Здравствуй Мир!</h1>
      <Car />
      <Car />
      <Car />
    </div>
  );
}

export default App;
