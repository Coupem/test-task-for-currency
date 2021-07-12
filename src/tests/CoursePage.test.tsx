import { mount, ReactWrapper, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import toJson from 'enzyme-to-json';
import CoursePage from '../pages/CoursePage';
import { RootState } from '../types';
import { NavButton } from '../styled';

describe('Course Page', () => {
  let state: RootState;
  let setUp;
  let component: ReactWrapper;

  beforeAll(() => {
    state = {
      currency: {
        currency: [
          { ccy: 'USD', baseCcy: 'UAH', buy: '27.05000', sale: '27.45000' },
          { ccy: 'EUR', baseCcy: 'UAH', buy: '31.85000', sale: '32.45000' },
          { ccy: 'RUR', baseCcy: 'UAH', buy: '0.35000', sale: '0.38000' },
          { ccy: 'BTC', baseCcy: 'USD', buy: '31125.3298', sale: '34401.6803' },
        ],
        isLoadingCurrency: false,
        error: 'string',
      },
    };
    const mockStore = configureStore();

    setUp = (store: RootState) =>
      mount(
        <Provider store={mockStore(store)}>
          <CoursePage {...state} />
        </Provider>
      );

    component = setUp(state);
  });

  it('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has correct iteration ', () => {
    expect(component.find('tr')).toHaveLength(5);
  });

  it('test button click', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<NavButton onClick={mockCallBack} />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('has correct name currency', () =>
    expect(
      component.find('tbody').find('tr').at(0).find('td').at(0).text()
    ).toEqual('USD'));

  it('has correct name currency', () =>
    expect(
      component.find('tbody').find('tr').at(1).find('td').at(0).text()
    ).toEqual('EUR'));

  it('has correct name currency', () =>
    expect(
      component.find('tbody').find('tr').at(2).find('td').at(0).text()
    ).toEqual('RUR'));

  it('has correct name currency', () =>
    expect(
      component.find('tbody').find('tr').at(3).find('td').at(0).text()
    ).toEqual('BTC'));
});
