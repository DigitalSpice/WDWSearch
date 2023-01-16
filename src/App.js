import React, { Component } from 'react';
import './App.css';
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
    .then(data => {
      console.log("data:",data);
      this.setState({characters: data.data})
      console.log("characters:", this.state.characters)
    });
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
    <div>
      <h1>Disney Character Search</h1>
      <button>TV</button>
      <button>Movie</button>
      <button>Video Game</button>
      
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList characters={filteredCharacters}/>
    </div>
  );
  }
}

export default App;
