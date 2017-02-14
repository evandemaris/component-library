import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Leaflet } from '../src';

const displayName = Leaflet.displayName || 'Leaflet';
const title = 'OpenStreetMap overlaid with geoJSON data';
const description = `
  This is a Leaflet.js map with geoJSON data handled through React.`;

const geoJSON = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "NAME": "Test point", "URL": "http:\/\/www.google.com\/", "LINE": "F-G" }, "geometry": { "type": "Point", "coordinates": [ 45.52, -122.67 ] } },
] }

const demoCode = () => (
  <Leaflet />
);

const propDocs = { inline: true, propTables: [Leaflet] };


export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
