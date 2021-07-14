import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { footerSmallScreen } from '../media';
import { colorBlue, colorWhite } from '../colors';

export const FooterComponent = styled(Col)`
  background-color: ${colorBlue};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorWhite};
  font-size: 20px;
  margin-top: 20px;

  ${footerSmallScreen};
`;
