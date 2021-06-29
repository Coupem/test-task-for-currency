import styled from 'styled-components';
import { buttonBestSmallScreen } from '../media';

export const ButtonBest = styled.button`
  &:hover {
    opacity: 20%;
  }
  max-width: 50px;
  border-radius: 8px;
  color: #086d9f;
  height: 24px;
  font-size: 15px;
  position: absolute;
  right: 15px;
  border: 1px solid #086d9f;
  @media (max-width: 768px) {
    ${buttonBestSmallScreen}
  }
`;
