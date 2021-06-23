import styled from 'styled-components';

export const ValidCourseContainer = styled.div`
  max-width: 1500px;
  height: 800px;
  margin: auto;
  border: 5px solid #086d9f;
  border-radius: 15px;
  box-shadow: 0 -3px 29px -4px;
`;

export const TitleCourseComponent = styled.div`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const FavoriteCurrencyComponentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 190px;
  margin: auto;
  border: 3px solid #086d9f;
  font-size: 20px;
  margin-top: 40px;
  border-radius: 5px;
`;

export const TitleFavoriteCurrency = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto 10px;
`;

export const NoFavoriteCurrency = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto;
`;

export const ButtonBest = styled.button`
  &:hover {
    opacity: 20%;
  }
  width: 15%;
  border-radius: 8px;
  color: #086d9f;
  height: 33px;
  position: absolute;
  right: 15px;
  border: 1px solid #086d9f;
`;
