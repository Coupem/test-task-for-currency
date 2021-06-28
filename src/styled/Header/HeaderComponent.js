import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { headerSmallScreen } from '../media';

export const HeaderComponent = styled(Row)`
  display: flex;
  justify-content: center;
  background-color: #086d9f;
  font-size: 40px;
  padding-left: 30px;
  align-items: center;
  color: white;
  width: 100%;
  height: 150px;
  @media (max-width: 768px) {
    ${headerSmallScreen}
  }
`;
