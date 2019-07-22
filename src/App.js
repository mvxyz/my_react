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
      <Car name={'Ford'} year={2018}>
        <p style={{color:'Red'}}>COLOR</p>
      </Car>
      <Car name={'Audi'} year={2017} />
      <Car name={'Mazda'} year={2015} />
    </div>
  );
}

export default App;
