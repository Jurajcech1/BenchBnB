var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./util/api_util.js');
var Search = require('./components/search.jsx')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var BenchForm = require('./components/bench_form.jsx');


var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <Route path='/bench/new' component={BenchForm}/>
    <IndexRoute component={Search}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
