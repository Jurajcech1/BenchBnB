var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  updateBenches: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function() {
    this.benchUpdater = BenchStore.addListener(this.updateBenches);
    // ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.benchUpdater.remove();
  },

  render: function() {
    return(
      <div>{this.state.benches.length}</div>
    );
  }
});

module.exports = Index;
