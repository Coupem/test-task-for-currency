import styled from 'styled-components/macro';
import { InputGroup, Table } from 'react-bootstrap';
import { paddingSmallScreen } from '../media';
import { colorBlue, colorRed } from '../colors';

export const ConverterContainer = styled.div`
  max-width: 1500px;
  height: 100%;
  margin: auto;
  border: none;
  border-radius: 15px;
  ${paddingSmallScreen}
`;

export const ErrorContainer = styled.div`
  color: ${colorRed};
  position: absolute;
  bottom: 15px;
  font-size: 15px;
`;

export const InputContainer = styled.input`
  height: 45px;
  border: 1px solid ${colorBlue};
  border-radius: 3px 0 0 3px;
  max-width: 300px;
  width: 100%;
  font-weight: 500;
  font-size: 22px;
  padding-left: 10px;
  position: relative;

  &:focus-visible {
    border: 2px solid ${colorBlue};
    outline: none;
  }
`;

export const InputGroupContainer = styled(InputGroup)`
  max-width: 350px;
  padding: 100px 0 40px 0;
  display: flex;
  justify-content: center;

  & form {
    display: flex;
  }
`;

export const OptionContainer = styled.option`
  max-width: 50px;
  line-height: 100px;
`;

export const SelectContainer = styled.select`
  height: 45px;
  background-color: ${colorBlue};
  color: white;
  border: 1px solid ${colorBlue};
  font-weight: 500;
  border-radius: 0 3px 3px 0;
  line-height: 100px;

  &:focus-visible {
    border: 1px solid ${colorBlue};
    outline: none;
  }
`;

export const TableCurrencyContainer = styled(Table)`
  max-width: 800px;
  margin: 80px auto;
  border: 2px solid ${colorBlue};
  font-size: 20px;
  box-shadow: 5px 9px 30px -18px;
  font-weight: 500;
`;

export const TitleConverterContainer = styled.div`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
