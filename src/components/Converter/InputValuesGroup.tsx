import React, { ChangeEventHandler, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Formik } from 'formik';

import { RootState, PropsInput, ErrorsHandler } from '../../types';

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
}: PropsInput): JSX.Element => {
  const { currency: loadedCurrency } = useSelector(
    (state: RootState) => state.currency
  );

  const handleInputValue =
    (formikHandleChange: ChangeEventHandler<HTMLInputElement>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      handleChangeInput(event.target.value);

      const inputValidation = event;

      if (inputValidation.target.value.length > 25) {
        return;
      }

      formikHandleChange(inputValidation);
    };

  return (
    <InputGroupContainer className="m-auto">
      <Formik
        initialValues={{ amount: '', currency: baseCurrency }}
        validate={(values) => {
          const errors: ErrorsHandler = {};

          if (!values.amount) {
            errors.amount = 'Please input value';
          } else if (!/([^']*)/i.test(values.amount)) {
            errors.amount = 'Invalid value';
          }

          return errors;
        }}
        onSubmit={() => {
          return undefined;
        }}
      >
        {({ values, errors, handleChange }) => (
          <form>
            <InputContainer
              placeholder="value"
              type="text"
              name="amount"
              onChange={handleInputValue(handleChange)}
              value={values.amount}
            />

            {errors.amount && <ErrorContainer>{errors.amount}</ErrorContainer>}
            <SelectContainer
              onChange={handleChangeCurrency}
              name="currency"
              id="select"
              value={baseCurrency}
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
