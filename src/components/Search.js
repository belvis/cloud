import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange(value){
    this.setState({
      searchTerm: value 
    },()=>console.log(this.state))
  }

  searchResult() {
    axios.get()
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      })
  }
  render() {
    return (
    <div>
      <input placeholder="Search Hero"
        value={this.state.searchTerm}
        onChange={(e)=>this.handleChange(e.target.value)}
         />      
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