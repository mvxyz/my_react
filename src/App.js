import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        // { name: 'Audi', year: 2017 },
        // { name: 'Mazda 1', year: 2015 }
      ],
      pageTitle: 'React component',
      showCars: false
    }
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars] // Создаем копию массива
    cars[index] = car
    this.setState({ cars })
  }

  onDeleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onDelete={this.onDeleteHandler.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/* <h1 style={{ color: 'blue', fontSize: '50px' }}>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <Counter />

        <hr />

        <button
          style={{ marginTop: 20 }}
          onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        {cars}

      </div>
    );
  }
}

export default App;