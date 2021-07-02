import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './redux/ducks/createStore';

console.log(typeof createStore);
const store = createStore(createStore);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/*  <App /> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
