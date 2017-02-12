import React from 'react';
import { shallow } from 'enzyme';
import Leaflet from './LeafletMap';

describe('Leaflet', () => {
  const wrapper = shallow(<Leaflet />);
  it('should render a Leaflet map', function() {
    expect(wrapper.find('Map')).to.have.length(1);
  });
});
