import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search'

class Button extends Component {
  constructor(props) {
    super(props);}

const Button( props ) {
    return(
        <button className = "forSearch"
                  onClick = {
                      () => props.onClick() }>
            To the rescue!
        </button>)
export default Button;
