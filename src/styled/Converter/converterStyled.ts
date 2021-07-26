import styled from 'styled-components';
import { InputGroup, Table } from 'react-bootstrap';
import { paddingSmallScreen } from '../media';
import { colorBlue, colorRed } from '../colors';

export const ConverterContainer = styled.div`
  max-width: 1500px;
  height: 800px;
  margin: auto;
  border: 5px solid ${colorBlue};
  border-radius: 15px;
  box-shadow: 0 -3px 29px -4px;
  ${paddingSmallScreen}
`;

export const ErrorContainer = styled.div`
  color: ${colorRed};
  position: absolute;
  left: 50px;
  font-size: 15px;
`;

export const InputContainer = styled.input`
  height: 30px;
  border: 1px solid ${colorBlue};
  border-radius: 3px;
  font-weight: 500;
  position: relative;
  &:focus-visible {
    border: 3px solid ${colorBlue};
    border-radius: 5px;
    outline: none;
  }
`;

export const InputGroupContainer = styled(InputGroup)`
  max-width: 350px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
`;

export const OptionContainer = styled.option`
  max-width: 50px;
  line-height: 100px;
`;

export const SelectContainer = styled.select`
  height: 30px;
  background-color: ${colorBlue};
  color: white;
  border: 1px solid ${colorBlue};
  font-weight: 500;
  border-radius: 3px;
  line-height: 100px;
  &:focus-visible {
    border: 3px solid ${colorBlue};
    border-radius: 5px;
    outline: none;
  }
`;

export const TableCurrencyContainer = styled(Table)`
  max-width: 800px;
  margin: 50px auto;
  border: 3px solid ${colorBlue};
  font-size: 20px;
  box-shadow: 5px 9px 30px -6px;
  font-weight: 500;
`;

export const TitleConverterContainer = styled.div`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
