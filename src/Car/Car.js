import React from 'react'

export default (props) => (
 <div>
 <h1>Car Name: {props.name}</h1>
 <p>Year: <strong>{props.year}</strong></p>
 <button onClick = {props.onChangeTitle}>Chanch</button>
 </div>
);