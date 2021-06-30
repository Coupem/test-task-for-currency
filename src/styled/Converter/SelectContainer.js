import styled from 'styled-components';

export const SelectContainer = styled.select`
  height: 30px;
  background-color: #086d9f;
  color: white;
  border: 1px solid #086d9f;
  font-weight: 500;
  border-radius: 3px;
  line-height: 100px;
  &:focus-visible {
    border: 3px solid #086d9f;
    border-radius: 5px;
    outline: none;
  }
`;
