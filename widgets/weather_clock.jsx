var React = require('react');
var ReactDOM = require('react-dom');
var WeatherClock = React.createClass({

  getInitialState: function () {

    return {
      date: new Date(),
      location: null,
      weather: null,
      temperature: null
     };
  },

  handleLocation: function(pos) {
    this.setState({location: pos.coords});
  },

  //after render
  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
    navigator.geolocation.getCurrentPosition(this.handleLocation);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({date: new Date()});
  },

  getWeather: function(latitude, longitude) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          var response = JSON.parse(xmlhttp.responseText);
          this.setState({weather: response.weather[0].description});
          this.setState({temperature: this.kelvinToFarenheit(response.main.temp) });
        }
        else if (xmlhttp.status === 400) {
          console.log("still bad");
        }
        else {
          console.log("bad");
        }
      }
    }.bind(this);

    var apiKey = "645c5d39c7603f17e23fcaffcea1a3c1";
    var url = "http://api.openweathermap.org\/data\/2.5\/weather?lat="+latitude+"&lon="+longitude+"&APPID="+apiKey;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },

  kelvinToFarenheit: function(deg) {
    return (deg - 273.15) * 1.8000 + 32;
  },

  render: function() {
    var locationString;
    if (this.state.location) {
      locationString = this.state.location;
      if (!this.state.weather) {
        this.getWeather(locationString.latitude, locationString.longitude);
      }
    }
    return(
      <div>
        <p>{this.state.date.toString()}</p>
        <p>Weather is:{this.state.weather}</p>
        <p>{this.state.temperature} degrees out</p>
      </div>
    );
  }
});

module.exports = WeatherClock;
