var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./util/api_util.js');
var Search = require('./components/search.jsx')

// var JurajComponent = React.createClass({
//   render: function() {
//     return(
//       <div>Hello!</div>
//     );
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Search />, document.getElementById('content'));
});
