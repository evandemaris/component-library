import React from 'react';
import { shallow } from 'enzyme';
import Leaflet from './LeafletMap';

describe('Leaflet', () => {
  const wrapper = shallow(<Leaflet />);
  it('should render a Leaflet map', () => {
    expect(wrapper.find('map')).to.have.length(1);
  });
  it('should render with class base', () => {
    expect(wrapper.props().className).to.contain('base');
  });
});
