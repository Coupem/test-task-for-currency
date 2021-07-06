import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { footerSmallScreen } from '../media';

export const FooterComponent = styled(Col)`
  background-color: #086d9f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    ${footerSmallScreen};
  }
`;
