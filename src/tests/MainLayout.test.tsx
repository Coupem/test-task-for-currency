import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Footer } from '../components/index';
import App from '../App';
import createStore from '../redux/index';

describe('Hello, Enzyme!', () => {
  // it('renders', () => {
  //   const wrapper = shallow(<Footer />);
  //   expect(wrapper).toMatchSnapshot();
  // });
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={createStore()}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it("render correctly text component", () => {
  //   const TextInputComponent = renderer.create(<TextInput />).toJSON();
  //   expect(TextInputComponent).toMatchSnapshot();
  // });

  // it('renders snapshots, too', () => {
  //   const wrapper = shallow(
  //     <div>
  //       <h1>Hello, Enzyme!</h1>
  //     </div>
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
});
