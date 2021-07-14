import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import createStore from '../redux/index';

import App from '../App';

// describe('App', () => {
//   const { container } = render(
//     <Provider store={createStore()}>
//       <App />
//     </Provider>
//   );
//   // it('has class name ', () => {
//   //   expect(container.firstChild).toHaveClass('container-fluid');
//   // });
//   // it('correct render', () => {
//   //   screen.debug();
//   // });
// });
