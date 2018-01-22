import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import HeroList from './components/Hero_list'

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
