import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import {
  inputGroupStyles,
  dropdownButtonStyles,
  formControlStyles,
} from './styles';

function InputGroupComponent({
  loadedCurrency,
  baseCurrency,
  handleChangeCurrency,
  handleChangeInput,
}) {
  return (
    <InputGroup className="m-auto" style={inputGroupStyles}>
      <FormControl
        onChange={handleChangeInput}
        placeholder="Enter quantity"
        type="number"
        style={formControlStyles}
      />
      <DropdownButton
        style={dropdownButtonStyles}
        title={baseCurrency}
        onSelect={handleChangeCurrency}
      >
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
    </InputGroup>
  );
}

InputGroupComponent.propTypes = {
  handleChangeCurrency: PropTypes.func,
  handleChangeInput: PropTypes.func,
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

export default InputGroupComponent;
