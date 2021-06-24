import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const ListGroupContainer = styled(ListGroup)`
  padding: 20px 0;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 10px;
    display: block;
    padding: 0;
    line-height: 0;
    font-weight: 700;
  }
`;
