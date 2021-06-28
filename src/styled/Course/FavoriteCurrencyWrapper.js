import styled from 'styled-components';
import { blockSmallScreen } from '../media';

export const FavoriteCurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: auto;
  border: 3px solid #086d9f;
  font-size: 20px;
  margin-top: 40px;
  border-radius: 5px;
  @media (max-width: 768px) {
    ${blockSmallScreen}
  }
`;
