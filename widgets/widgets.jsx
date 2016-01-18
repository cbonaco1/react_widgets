var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var WeatherClock = require('./weather_clock');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <h2>Autocomplete: </h2>
        <Autocomplete names={this.props.names}/>

        <h2>Weather Clock:</h2>
        <WeatherClock coordinates={this.props.coordinates} />
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
  ReactDOM.render(<Widgets names={namelist} coordinates={location}/>, document.getElementById('main'));
});
