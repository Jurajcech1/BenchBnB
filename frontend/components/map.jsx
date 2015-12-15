var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');

var Map = React.createClass({
  updateBenches: function(){
    this.benches = BenchStore.all();
    // debugger
    this.benchMarkers = [];
    this.benches.forEach(function(bench, index) {
      this.benchMarkers.push(new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: this.map,
        title: bench.description
      }));
    }.bind(this));
  },

  mapIdle: function() {
    var latLng = this.map.getBounds();
    var southWest = latLng.getSouthWest();
    var northEast = latLng.getNorthEast();
    var bounds = {
      "northEast": {"lat": northEast.lat(), "lng": northEast.lng()},
      "southWest": {"lat": southWest.lat(), "lng": southWest.lng()}
    };
    // debugger

    ApiUtil.fetchBenches(bounds);
  },

  componentDidMount: function(){
      this.BenchListener = BenchStore.addListener(this.updateBenches);
      var map = ReactDOM.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener('idle', this.mapIdle);
      this.map.addListener('click', function(e) {
        this.props.clickMapHandler({lat: e.latLng.lat(), lng: e.latLng.lng()});
      }.bind(this));
    },

  render: function() {
    return(
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
