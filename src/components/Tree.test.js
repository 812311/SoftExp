import React from 'react';
import Tree from './Tree';
import { shallow } from 'enzyme';
import { treeData2 } from '../DataSource';

describe('<Tree />', () => {
  it('not to be undefined', () => {
    expect(Tree).not.toBe(undefined)
  });
  it('should Have Length 1', () => {
    const component = shallow(<Tree data={treeData2}/>);
    expect(component).toHaveLength(1);
  });
});

