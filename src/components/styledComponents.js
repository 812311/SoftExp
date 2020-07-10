import styled from 'styled-components';

export const LeafStyled = styled.div`
  margin: 5px 0px 5px 25px;
  border-radius: 20px;
`;
export const NodeStyled = styled.div`
  padding-left: 20px;
  border: 1px solid black;
  border-radius: 20px;
  .nodeLabel {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 3px;
    border: 2px solid blue;
    border-radius: 5px;
    padding: 0px 5px;
    &:active {
      background-color: red;
    }
  }
`;
export const CollapsibleChildren = styled.div`
  height: ${(p) => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;
