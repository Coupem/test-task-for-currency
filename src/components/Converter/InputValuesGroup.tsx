import React, { ChangeEventHandler, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';

import {
  InputGroupContainer,
  InputContainer,
  SelectContainer,
  ErrorContainer,
  OptionContainer,
} from '../../styled';
import { RootState, PropsInput, ErrorsHandler } from '../../types';

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
      if (inputValidation.target.value.length > 10) {
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
            errors.amount = 'Please input number value';
          } else if (!/-?\d+(\.\d{0,})?/i.test(values.amount)) {
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
              placeholder="input value"
              type="number"
              name="amount"
              onChange={handleInputValue(handleChange)}
              value={values.amount}
            />

            {errors.amount && <ErrorContainer>{errors.amount}</ErrorContainer>}
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
