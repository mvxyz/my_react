import React from 'react'
import classes from './Car.css'
import withClass from '../hoc/withClass'

class Car extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>Car Name: {this.props.name}</h1>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type='text' onChange={this.props.onChangeName} value={this.props.name}></input>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

export default withClass(Car, classes.Car)