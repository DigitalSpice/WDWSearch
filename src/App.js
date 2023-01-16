import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchfield: '',
      artWorks: []
    }
  }

  componentDidMount(){
    fetch('https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=40&fields=id,title,image_id,date_display,artist_display')
    .then(response => response.json())
    .then(art => {
      this.setState({artWorks: art.data})
      console.log("artWorks:", this.state.artWorks);
    })
    .catch((err) => { console.log('fetch request failed: ', err) });
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value});
  }

  render(){
    const {searchfield, artWorks} = this.state;
    const filteredArtworks = artWorks.filter((artWork) =>{
      return artWork.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !artWorks.length ?
    <h1>Loading...</h1> : 
    (
    <div className='tc'>
      <h1>Artwork Color Palette</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <ErrorBoundary>
        <CardList artWorks={filteredArtworks}/>
      </ErrorBoundary>
    </div>
  );
  }
}

export default App;
