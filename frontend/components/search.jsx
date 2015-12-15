var React = require('react');
var Index = require('./index.jsx');
var Map = require('./map.jsx');

var Search = React.createClass({

  clickMapHandler: function(coord) {
    this.props.history.pushState(null, "/bench/new", coord)
  },

  render: function() {
    return(
      <div>
        <Index />
        <Map clickMapHandler={this.clickMapHandler}/>
      </div>
    );
  }
});

module.exports = Search;
