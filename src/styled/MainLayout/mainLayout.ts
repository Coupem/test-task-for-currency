import styled from 'styled-components/macro';
import { Col, Container } from 'react-bootstrap';
import { blockSmallScreen, interactionSmallScreen } from '../media';
import { colorBlue } from '../colors';

export const InteractionContainerWrapper = styled(Col)`
  border-radius: 15px 0 0 15px;
  min-height: 100vh;
  background-color: white;
  padding-top: 0;

  ${interactionSmallScreen}
`;

export const MainContentWrapper = styled(Col)`
  display: flex;
  min-height: 100vh;
  padding: 0;

  ${blockSmallScreen}
`;

export const MainLayoutContainer = styled(Container)`
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
