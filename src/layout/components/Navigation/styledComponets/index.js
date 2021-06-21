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
  color: white;
  border-radius: 15px 0 0 15px;
  border: 2px solid white;
  font-size: 30px;
  background-color: ${(props) => (props.color ? props.color : '#086d9f')};
  ${(props) =>
    props.primary &&
    css`
      color: #086d9f;
      background-color: white;
    `};
`;
