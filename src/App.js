import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchfield: '',
      hotels: [],
      allHotels: true,
      campground: false,
      deluxe: false,
      moderate: false,
      value: false,
      nullOther: false
    }
  }

  componentDidMount(){
    fetch('https://touringplans.com/walt-disney-world/hotels.json')
    .then(response => response.json())
    .then(hotels => this.setState({hotels: hotels}));
  }

  render(){
    const {searchfield, hotels, allHotels, campground,
            deluxe, moderate, value, nullOther} = this.state;
    const filteredHotelsbyName = hotels.filter((hotel) =>{
      return hotel.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    const filteredHotelsbyType = hotels.filter((hotel) =>{
      return hotel.category_code.toLowerCase().includes();
    })
  return (
    <div className="App">
      <h1>Walt Disney World Search</h1>
      <button>All</button>
      <button>Deluxe & Deluxe Villas</button>
      <button>Moderate</button>
      <button>Value</button>
      <button>Other</button>
      <img src={logo} className="App-logo" alt="logo" />
      
      
    </div>
  );
  }
}

export default App;
