import styled from 'styled-components/macro';
import { ListGroup, Table } from 'react-bootstrap';
import {
  blockSmallScreen,
  buttonBestSmallScreen,
  fontSmallScreen,
  listGroupSmallScreen,
} from '../media';
import { colorBlue } from '../colors';

export const ButtonBest = styled.button`
  &:hover {
    opacity: 20%;
  }
  max-width: 50px;
  border-radius: 8px;
  color: ${colorBlue};
  height: 24px;
  font-size: 15px;
  position: absolute;
  right: 15px;
  border: 1px solid ${colorBlue};
  ${buttonBestSmallScreen}
`;

export const FavoriteCurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  border: 2px solid ${colorBlue};
  font-size: 20px;
  margin: 40px auto 0 auto;

  ${blockSmallScreen}
`;

export const ListGroupContainer = styled(ListGroup)`
  padding: 20px 0;
  font-weight: 500;
  ${listGroupSmallScreen}
`;

export const ListTableCurrency = styled(Table)`
  max-width: 800px;
  margin: 80px auto;
  border: 2px solid ${colorBlue};
  font-size: 20px;
  box-shadow: 5px 9px 30px -18px;
  position: relative;
  ${fontSmallScreen}
`;

export const NoFavoriteCurrency = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto;
`;

export const TitleCourseComponent = styled.div`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const TitleFavoriteCurrency = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto 10px;

  ${fontSmallScreen};
`;

export const ValidCourseContainer = styled.div`
  max-width: 1500px;
  height: 100%;
  margin: auto;
  font-weight: 600;
`;
