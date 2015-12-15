var React = require('react');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  theLat: function() {
    if(this.props.location.query.lat) {
      return this.props.location.query.lat;
    } else {
      return '';
    }
  },

  theLng: function() {
    if(this.props.location.query.lng) {
      return this.props.location.query.lng;
    } else {
      return '';
    }
  },

  blankBenchFields: {
    lat: this.theLat,
    lng: this.theLong,
    description: '',
    seating: ''
  },

  getInitialState: function() {
    return this.blankBenchFields;
  },

  createBench: function(e) {
    e.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function(attr) {
      if(attr == 'description') {
       bench[attr] = this.state[attr];
     } else if (attr == 'seating') {
       bench[attr] = parseInt(this.state[attr]);
     } else {
       bench[attr] = parseFloat(this.state[attr]);
      }
    }.bind(this));
    debugger
    ApiUtil.createBench(bench);
    this.setState(this.blankBenchFields);
  },

  render: function() {
    return(
      <form className='newBench' onSubmit={this.createBench}>
        <div>
          <label htmlFor='lat'>Latitude</label>
          <input
            type='text'
            id='lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label htmlFor='lng'>Longitude</label>
          <input
            type='text'
            id='lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            valueLink={this.linkState("description")}
          />
        </div>

        <div>
          <label htmlFor='seating'>Seating</label>
          <input
            type='text'
            id='seating'
            valueLink={this.linkState("seating")}
          />
        </div>
        <button>Create Bench</button>
        <br />
      </form>
    );
  }
});

module.exports = BenchForm
