import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';
import { navButtonSmallScreen } from '../media';

interface Primary {
  readonly primary: boolean;
}

export const NavButton = styled.button<Primary>`
  @media (max-width: 768px) {
    ${navButtonSmallScreen}
  }
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

export const NavigationComponent = styled(Col)`
  padding: 50px 0 0 0;
`;
