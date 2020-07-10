import React from 'react';
import { shallow } from 'enzyme';
import Node from './Node';

describe('<Node />', () => {
  it('should exist', () => {
    const component = shallow(<Node/>);
    expect(component.exists()).toBe(true);
  });
  it('should render the node list', () => {
    const component = shallow(<Node />);
    expect(component.first()).toHaveLength(1);
  });
});

