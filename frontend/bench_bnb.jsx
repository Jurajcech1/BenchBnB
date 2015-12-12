var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./util/api_util.js');
var Index = require('./components/index.jsx')

// var JurajComponent = React.createClass({
//   render: function() {
//     return(
//       <div>Hello!</div>
//     );
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Index />, document.getElementById('content'));
});
