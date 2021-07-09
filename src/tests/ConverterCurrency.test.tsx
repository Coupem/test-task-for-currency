import { CommonWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import { ConvertCurrency } from '../components/index';

describe('Converter page', () => {
  const mockStore = configureStore();
  let wrapper:
    | CommonWrapper<{}, {}, React.Component<{}, {}, any>>
    | cheerio.Cheerio;
  let state;
  beforeAll(() => {
    state = {
      currency: {
        currency: [
          { baseCcy: 'UAH', buy: '1', ccy: 'UAH', sale: '01' },
          { baseCcy: 'USD', buy: '2', ccy: 'BTC', sale: '02' },
          { baseCcy: 'UAH', buy: '3', ccy: 'USD', sale: '03' },
          { baseCcy: 'UAH', buy: '4', ccy: 'RUR', sale: '04' },
          { baseCcy: 'UAH', buy: '5', ccy: 'EUR', sale: '05' },
        ],
        isLoadingCurrency: false,
        error: 'string',
      },
    };
    wrapper = mount(
      <Provider store={mockStore(state)}>
        <ConvertCurrency convertedValue={0} baseCurrency="" />
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
