var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = React.createClass({

  getInitialState: function() {
    return { searchString: "" };
  },

  handleChange: function(e) {
    this.setState({searchString: (e.target.value)});
  },

  handleClick: function(e) {
    this.setState({searchString: (e.target.innerHTML)});
  },

  render: function () {
    var names = this.props.names;
    var matches = [];
    if (this.state.searchString.length > 0){
      names.map(function(n){
        if (n.toLowerCase().startsWith((this.state.searchString).toLowerCase())) {
          matches.push(n);
        }
      }.bind(this)

    );
    }
    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange}/>
        <ul>
          { matches.map(function (n){
            return <li key={n} onClick={this.handleClick}>{n}</li>;
          }.bind(this))
        }
        </ul>
      </div>
    );
  }
});


module.exports = Autocomplete;
