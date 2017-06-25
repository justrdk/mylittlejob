import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Songs from './components/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Searchbar />
        <Songs />
      </div>
    );
  }
}

export default App;
