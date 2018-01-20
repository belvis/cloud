import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(){
        super();
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
}