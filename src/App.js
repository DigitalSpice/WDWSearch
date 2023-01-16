import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchfield: '',
      characters: [],
    }
  }

  componentDidMount(){
    fetch('https://api.disneyapi.dev/characters')
    .then(response => response.json())
    .then(characters => this.setState({characters: characters}));
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value});
  }

  render(){
    const {searchfield, characters} = this.state;
    const filteredCharacters = characters.filter((character) =>{
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  return (
    <div className="App">
      <h1>Disney Character Search</h1>
      <button>TV</button>
      <button>Movie</button>
      <button>Video Game</button>
      
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList hotels={filteredCharacters}/>
    </div>
  );
  }
}

export default App;
