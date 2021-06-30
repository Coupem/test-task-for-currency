import styled from 'styled-components';

export const InputContainer = styled.input`
  height: 30px;
  border: 1px solid #086d9f;
  border-radius: 3px;
  font-weight: 500;
  position: relative;
  &:focus-visible {
    border: 3px solid #086d9f;
    border-radius: 5px;
    outline: none;
  }
`;
