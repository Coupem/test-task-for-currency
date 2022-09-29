import styled from 'styled-components/macro';
import { Row } from 'react-bootstrap';
import { headerSmallScreen } from '../media';
import { colorBlue, colorWhite } from '../colors';

export const HeaderComponent = styled(Row)`
  display: flex;
  justify-content: center;
  background-color: ${colorBlue};
  font-size: 40px;
  padding-left: 30px;
  align-items: center;
  color: ${colorWhite};
  width: 100%;
  height: 150px;

  ${headerSmallScreen}
`;
