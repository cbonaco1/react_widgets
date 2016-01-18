var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete names={this.props.names}/>
      </div>
    );
  }
});

var namelist = [
  "Zane",
  "Christian",
  "Fred",
  "john",
  "paul",
  "george",
  "ringo",
  "chris",
  "frank",
  "peter",
  "Christopher"
];



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets names={namelist}/>, document.getElementById('main'));
});
