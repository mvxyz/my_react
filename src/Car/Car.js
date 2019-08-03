import React from 'react'

class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)
    //     return prevState
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapshotBeforeUpdate')
    // }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    render() {
        console.log('Car render')

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed')
        // }

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