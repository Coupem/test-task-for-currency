import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { blockSmallScreen } from '../media';

export const MainContentWrapper = styled(Col)`
  display: flex;
  height: 1000px;
  padding: 0;
  @media (max-width: 768px) {
     ${blockSmallScreen}
`;
