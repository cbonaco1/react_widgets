var React = require('react');
var ReactDOM = require('react-dom');
var Tile = require('./components/tile.jsx');
var Game = require('./components/game.jsx');





document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Tile />, document.getElementById("main"));
});
