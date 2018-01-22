import React from 'react';

const Button = ()=>{
    return <input />;
}

export default Button;
function Button( props ) {
    return(
        <button className = "pressMe"
                  onClick = {
                      () => props.onClick() }>
            Click Me!
        </button>)
}
var React = require('react');

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

var Button = React.createClass({
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});

module.exports = Button;
