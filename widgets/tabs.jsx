var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = React.createClass({

  getInitialState: function() {
    return {
      selected: 0
    };
  },

  handleClick: function(e) {
    console.log(e);
    this.setState({selected: parseInt(e.currentTarget.id)});
    // debugger
  },



  render: function () {

    var titles = this.props.content.map(function (c, indx) {
      var style = "";
      if (indx === this.state.selected) {
        style = "selected";
      }

      return <li onClick={this.handleClick} className={style} key={indx} id={indx}>{c.title}</li>;

    }.bind(this));

    var contents = this.props.content.map(function (c, indx) {
      return <p key={indx}>{c.content}</p>;
    });

    return (
      <div>
        <ul>
          { titles }
        </ul>
        <article>
          {contents[this.state.selected]}
        </article>
      </div>
    );
  }



});



module.exports = Tabs;
