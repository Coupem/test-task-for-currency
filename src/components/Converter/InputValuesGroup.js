import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Formik } from 'formik';
import {
  InputGroupContainer,
  InputContainer,
  SelectContainer,
  ErrorContainer,
  OptionContainer,
} from '../../styled';

const InputValuesGroup = ({
  baseCurrency,
  handleChangeCurrency,
  handleChangeInput,
}) => {
  const { currency: loadedCurrency } = useSelector(
    ({ responseData }) => responseData
  );

  const handleInputValue = (formikHandleChange) => (event) => {
    handleChangeInput(event.target.value);

    formikHandleChange(event);
  };

  return (
    <InputGroupContainer className="m-auto">
      <Formik
        initialValues={{ amount: '', currency: baseCurrency }}
        validate={(values) => {
          const errors = {};
          if (!values.amount) {
            errors.amount = 'Please input number value';
          } else if (!/\-?\d+(\.\d{0,})?/i.test(values.amount)) {
            errors.amount = 'Invalid value';
          }
          return errors;
        }}
        onSubmit={(values) => values}
      >
        {({ values, errors, handleChange }) => (
          <form>
            <InputContainer
              placeholder="input value"
              type="number"
              name="amount"
              onChange={handleInputValue(handleChange)}
              // onBlur={handleBlur}
              value={values.amount}
            />

            {errors.amount ? (
              <ErrorContainer>{errors.amount}</ErrorContainer>
            ) : null}
            <SelectContainer
              onChange={handleChangeCurrency}
              defaultValue={values.currency}
              name="currency"
            >
              {loadedCurrency.map((value) => (
                <OptionContainer key={value.ccy} value={value.ccy}>
                  {value.ccy}
                </OptionContainer>
              ))}
            </SelectContainer>
          </form>
        )}
      </Formik>
    </InputGroupContainer>
  );
};

InputValuesGroup.propTypes = {
  handleChangeCurrency: PropTypes.func,
  handleChangeInput: PropTypes.func,
  baseCurrency: PropTypes.string,
};

export default InputValuesGroup;
