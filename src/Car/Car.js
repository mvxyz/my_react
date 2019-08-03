import React from 'react'

class Car extends React.Component {
    render() {
        return (
            <div style={{
                border: '1px solid #ccc',
                marginBottom: '10px',
                display: 'block',
                padding: '10px'
            }}>
                <h1>Car Name: {this.props.name}</h1>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type='text' onChange={this.props.onChangeName} value={this.props.name}></input>
                <button onClick={this.props.onDelete}>Delete</button>
            </div >
        )
    }
}

export default Car