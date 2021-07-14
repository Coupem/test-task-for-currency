import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import { blockSmallScreen } from '../media';
import { colorBlue } from '../colors';

export const InteractionContainerWrapper = styled(Col)`
  border-radius: 25px;
  height: 1000px;
  background-color: white;
  padding-top: 100px;
`;

export const MainContentWrapper = styled(Col)`
  display: flex;
  height: 1000px;
  padding: 0;

  ${blockSmallScreen}
`;

export const MainLayoutContainer = styled(Container)`
  height: 1200px;
  padding: 0;
  background-color: ${colorBlue};
  margin: 0;
  font-family: -apple-system, source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
