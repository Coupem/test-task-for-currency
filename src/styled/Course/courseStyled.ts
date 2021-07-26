import styled from 'styled-components';
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
  margin: auto;
  border: 3px solid ${colorBlue};
  font-size: 20px;
  margin-top: 40px;
  border-radius: 5px;
  ${blockSmallScreen}
`;

export const ListGroupContainer = styled(ListGroup)`
  padding: 20px 0;
  font-weight: 500;
  ${listGroupSmallScreen}
`;

export const ListTableCurrency = styled(Table)`
  max-width: 800px;
  margin: 50px auto;
  border: 3px solid ${colorBlue};
  font-size: 20px;
  box-shadow: 5px 9px 30px -6px;
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
  height: 800px;
  margin: auto;
  border: 5px solid ${colorBlue};
  border-radius: 15px;
  box-shadow: 0 -3px 29px -4px;
  font-weight: 600;
`;
