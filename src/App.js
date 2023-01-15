import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';

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

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value});
  }

  render(){
    const {searchfield, hotels} = this.state;
    const filteredHotelsbyName = hotels.filter((hotel) =>{
      return hotel.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // const filteredHotelsbyType = hotels.filter((hotel) =>{
    //   return hotel.category_code.toLowerCase().includes();
    // })
  return (
    <div className="App">
      <h1>Walt Disney World Search</h1>
      <button>All</button>
      <button>Deluxe & Deluxe Villas</button>
      <button>Moderate</button>
      <button>Value</button>
      <button>Other</button>
      <img src={'/wdw_beacons.jpeg'} alt="logo" />
      
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList hotels={filteredHotelsbyName}/>
    </div>
  );
  }
}

export default App;
