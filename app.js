var mapboxgl = require('mapbox-gl');
var config = require('./config');

mapboxgl.accessToken = config.MAPBOX_ACCESS_TOKEN;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
