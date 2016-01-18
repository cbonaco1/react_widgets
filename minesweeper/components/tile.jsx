var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./game.jsx');

var Tile = React.createClass({
  render: function() {
    return (
      <p>T</p>
    );
  }
});

module.exports = Tile;
