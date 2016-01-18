var Minesweeper = require('../minesweeper.js');
var React = require('react');
var ReactDOM = require('react-dom');

var Game = React.createClass({
  getInitialState: function() {
    return { board: new Minesweeper.Board(10, 10) };
  },

  updateGame: function() {

  },

  render: function() {
    return(
      <Board board={this.state.board} update={this.updateGame}/>
    );
  }
});

module.exports = Game;
