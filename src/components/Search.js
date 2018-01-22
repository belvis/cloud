import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
          searchTerm: ''
        }
    }
    

    searchResult(){
        axios.get()
        .then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.error(err);
        })
    }
    render(){
      return (
        <div>
          <input
          onChange=""
          placeholder="Search Hero"/>
          <button>Search</button>
        </div>
      )
    }
}
export default Search;
// marvel.characters.findByName(searchTerm)
//   .then(function(res) {
//     console.log('Found character ID', res.data[0].id);
//     return marvel.characters.comics(res.data[0].id);
//   })
//   .then(function(res) {
//     console.log('found %s comics of %s total', res.meta.count, res.meta.total);
//     console.log(res.data);
//   })
//   .fail(console.error)
//   .done();
//   export default Search;