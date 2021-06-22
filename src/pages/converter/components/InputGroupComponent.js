import React from 'react';
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from 'react-bootstrap';

export function InputGroupComponent({
  loadedCurrency,
  baseCurrency,
  handleChangeCurrency,
  handleChangeInput,
}) {
  return (
    <InputGroup className="m-auto w-25 pt-5">
      <FormControl
        onChange={handleChangeInput}
        aria-label="Text input with dropdown button"
        type="number"
        maxLength={5}
        size="sm"
      />
      <DropdownButton
        className="w-25"
        title={baseCurrency}
        onSelect={handleChangeCurrency}
      >
        {loadedCurrency.map((item) => (
          <Dropdown.Item
            key={item.ccy}
            eventKey={item.ccy}
            active={baseCurrency === item.ccy}
          >
            {item.ccy}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </InputGroup>
  );
}
