import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import { blockSmallScreen } from '../media';

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
  @media (max-width: 768px) {
     ${blockSmallScreen}
`;

export const MainLayoutContainer = styled(Container)`
  height: 1200px;
  padding: 0;
  background-color: #086d9f;
  margin: 0;
  font-family: -apple-system, source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
