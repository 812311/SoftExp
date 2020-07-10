import React from 'react';
import Leaf from './Leaf';
import { shallow } from 'enzyme';

describe('<Leaf />', () => {
  it('not to be undefined', () => {
    expect(Leaf).not.toBe(undefined)
  });
  it('should exist', () => {
    const component = shallow(<Leaf/>);
    expect(component.exists()).toBe(true);
  });
  it('should have value this is a test', () => {
    const text = "this is a test";
    const component = shallow(<Leaf text={text} />);
    expect(component.find("span").props().children).toEqual(text);
  });
});

