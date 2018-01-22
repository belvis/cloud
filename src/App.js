import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/Search.js';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
