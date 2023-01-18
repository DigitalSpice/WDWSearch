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
    <div>
      <div className='tc'>
        <h1 className='f1 bg-lightest-blue mv0 pa4 bb'>Artwork Color Palette</h1>
        <div className='fl w-20 pa2 br bb'>
          <h2>Filter</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <h3>Common Filters:</h3>
          <button>Vincent van Gogh</button><br/><br/>
          <button>Katsushika Hokusai</button><br/><br/>
          <button>Claude Monet</button><br/><br/>
          <button>Pierre-Auguste Renoir</button><br/><br/>
          <button>Rembrandt</button>
        </div>
        <div className='fl w-80 pa2'>
        <ErrorBoundary>
          <CardList artWorks={filteredArtworks}/>
        </ErrorBoundary>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
