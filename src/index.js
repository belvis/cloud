import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './components/Search';
import HeroList from './components/Hero_list';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// marvel.characters.findAll(20,340)
//   .then(console.log)
//   .fail(console.error)
//   .done();