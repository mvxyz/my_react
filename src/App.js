import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2017 },
      { name: 'Mazda 1', year: 2015 }
    ],
    pageTitle: 'React component',
    showCars: false
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
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.onDeleteHandler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1 style={{ color: 'blue', fontSize: '50px' }}>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        {cars}

      </div>
    );
  }
}

export default App;