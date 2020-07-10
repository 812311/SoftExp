import React, { useState } from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { NodeStyled, CollapsibleChildren } from '../styledComponents';

const Node = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    alert(`${text} Selected`);
  };

  return (
    <NodeStyled>
      <div className="nodeLabel">
        {isOpen ? (
          <FaArrowDown onClick={handleExpand} />
        ) : (
          <FaArrowRight onClick={handleExpand} />
        )}
        <span onClick={handleSelect}>{text}</span>
      </div>
      <CollapsibleChildren isOpen={isOpen}>{children}</CollapsibleChildren>
    </NodeStyled>
  );
};
export default Node;
