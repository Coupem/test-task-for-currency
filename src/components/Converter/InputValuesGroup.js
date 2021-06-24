import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import { InputGroupContainer } from '../../styled';

const InputValuesGroup = ({
  loadedCurrency,
  baseCurrency,
  handleChangeCurrency,
  handleChangeInput,
  inputValue,
}) => (
  <InputGroupContainer className="m-auto">
    <FormControl
      className="font-weight-bold"
      onChange={handleChangeInput}
      value={inputValue}
      placeholder="Enter quantity"
      type="number"
    />
    <DropdownButton title={baseCurrency} onSelect={handleChangeCurrency}>
      {loadedCurrency.map((itemCurrency) => (
        <Dropdown.Item
          key={itemCurrency.ccy}
          eventKey={itemCurrency.ccy}
          active={baseCurrency === itemCurrency.ccy}
        >
          {itemCurrency.ccy}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  </InputGroupContainer>
);

InputValuesGroup.propTypes = {
  handleChangeCurrency: PropTypes.func,
  handleChangeInput: PropTypes.func,
  inputValue: PropTypes.string,
  baseCurrency: PropTypes.string,
  loadedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      base_ccy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default InputValuesGroup;
