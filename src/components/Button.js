import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search'

function Button(props){
  function onClick(id){
    axios.get('/api/heroes/'+ id)
    .then(res=>{
      console.log(res)
    })
  }
  return(
    <button className = "forSearch"
              onClick = {
                  () => onClick(props.id) }>
        To the rescue!
    </button>)
}

export default Button;
