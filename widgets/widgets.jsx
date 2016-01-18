var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var WeatherClock = require('./weather_clock');
var Tabs = require('./tabs');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <h2>Autocomplete: </h2>
        <Autocomplete names={this.props.names}/>

        <h2>Weather Clock:</h2>
        <WeatherClock coordinates={this.props.coordinates} />

        <h2>Tabs</h2>
        <Tabs content={this.props.content} />
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

var content = [
  {title: "Great", content: "Expectations"},
  {title: "Winnie", content: "The Pooh"},
  {title: "Moby", content: "the musician not the book"},
  {title: "Cat", content: "Brekfist"}
];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets names={namelist} coordinates={location} content={content}/>, document.getElementById('main'));
});
