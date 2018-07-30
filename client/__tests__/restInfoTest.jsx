import React from 'react';
import { shallow } from 'enzyme';
import RestInfo from '../components/restInfo';

describe('Testing RestInfo', () => {
  const wrapper = shallow(<RestInfo />);
  it('should render a rating component', () => {
    expect(wrapper.find('#ratings').length).toEqual(1);
  });
  it('should render the restaurant name', () => {
    expect(wrapper.find('#rest-name-title').length).toEqual(1);
  });
  it('should render the number of reviews', () => {
    expect(wrapper.find('#reviews').length).toEqual(1);
  });
  it('should render a details component', () => {
    expect(wrapper.find('#details').length).toEqual(1);
  });
  it('should render a price range', () => {
    expect(wrapper.find('#price_range').length).toEqual(1);
  });
  it('should render a tags component', () => {
    expect(wrapper.find('#rest-tags').length).toEqual(1);
  });
});
