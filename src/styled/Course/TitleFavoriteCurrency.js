import styled from 'styled-components';
import { fontSmallScreen } from '../media';

export const TitleFavoriteCurrency = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto 10px;
  @media (max-width: 768px) {
    ${fontSmallScreen};
  }
`;
