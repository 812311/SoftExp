import React from 'react';
import { LeafStyled } from '../styledComponents';

const Leaf = ({ text }) => {
  return (
    <LeafStyled onClick={() => alert(`${text} Selected`)}>
      <span>{text}</span>
    </LeafStyled>
  );
};

export default Leaf;
