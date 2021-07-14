import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';
import { navButtonSmallScreen } from '../media';
import { Primary } from '../../types';
import { colorBlue, colorWhite } from '../colors';

export const NavButton = styled.button<Primary>`
  &:hover {
    opacity: 70%;
  }
  width: 100%;
  height: 80px;
  margin: 10px 0;
  border-style: none;
  color: ${colorWhite};
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px 5px 5px 15px;
  border-top: 3px solid ${colorWhite};
  border-bottom: 2px solid ${colorWhite};
  background-color: ${(props) => (props.color ? props.color : colorBlue)};
  ${(props) =>
    props.primary &&
    css`
      color: ${colorBlue};
      background-color: ${colorWhite};
    `};
  ${navButtonSmallScreen}
`;

export const NavigationComponent = styled(Col)`
  padding: 50px 0 0 0;
`;
