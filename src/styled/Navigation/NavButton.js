import styled, { css } from 'styled-components';

export const NavButton = styled.button`
  &:hover {
    opacity: 70%;
  }
  width: 100%;
  height: 80px;
  margin: 10px 0;
  border-style: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px 5px 5px 15px;
  border-top: 3px solid white;
  border-bottom: 2px solid white;
  background-color: ${(props) => (props.color ? props.color : '#086d9f')};
  ${(props) =>
    props.primary &&
    css`
      color: #086d9f;
      background-color: white;
    `};
`;
