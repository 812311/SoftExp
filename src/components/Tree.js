import React from 'react';
import Node from './Node/Node';
import Leaf from './Leaf/Leaf';

const Tree = ({ data }) => {
  const tree = data || [];
  return tree.map((item) => {
    if (typeof item.children === 'undefined') {
      return <Leaf key={item.id} text={item.text} />;
    }
    return (
      <Node key={item.id} text={item.text}>
        <Tree data={item.children} />
      </Node>
    );
  });
};

export default Tree;
