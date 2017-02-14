import React from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.css';
import data from './data.json';

const cx = classNames.bind(styles);
const className = cx({ base: true });
require('../../assets/leaflet.css');

const markers = [
  {
    position: { lng: -122.673447, lat: 45.5225581 },
    text: 'Voodoo Doughnut',
  },
  {
    position: { lng: -122.6781446, lat: 45.5225512 },
    text: 'Bailey\'s Taproom',
  },
  {
    position: { lng: -122.67535700000002, lat: 45.5192743 },
    text: 'Barista'
  }
];

const MakeMarker = ({ map, pos }) => (
  <Marker map={map} position={pos}>
    <Popup>
      <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
    </Popup>
  </Marker>
);

class Leaflet extends React.Component {
  constructor() {
    super();
    this.state = {
      geoJson:{
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "NAME": "Test point", "URL": "http:\/\/www.google.com\/", "LINE": "F-G" }, "geometry": { "type": "Point", "coordinates": [ 45.52, -122.67 ] } },
        ]
      },
      lat: 45.5236111,
      lng: -122.675,
      zoom: 11,
    };
  }
  render() {
    const centerPosition = [this.state.lat, this.state.lng];
    return (
      <Map center={centerPosition} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data = {data}/>
        {markers.map(({position}) => (<MakeMarker pos={position} />))}

      </Map>
    );
  }
}

Leaflet.propTypes = {
  geoJson: React.PropTypes.object,
};

Leaflet.displayName = 'Leaflet';

export default Leaflet;
