import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { listGroupSmallScreen } from '../media';

export const ListGroupContainer = styled(ListGroup)`
  padding: 20px 0;
  font-weight: 500;
  @media (max-width: 768px) {
    ${listGroupSmallScreen}
  }
`;
