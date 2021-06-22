import styled, { css } from 'styled-components';

export const NavigationComponent = styled.div`
  width: 350px;
  height: 100%;
  background-color: #086d9f;
  padding-top: 50px;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  border-style: none;
  color: white;
  border-radius: 15px 5px 5px 15px;
  border-top: 3px solid white;
  border-bottom: 2px solid white;
  font-size: 30px;
  background-color: ${(props) => (props.color ? props.color : '#086d9f')};
  ${(props) =>
    props.primary &&
    css`
      color: #086d9f;
      background-color: white;
    `};
`;
