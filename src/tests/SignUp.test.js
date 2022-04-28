import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/ConfigureStore';
import SignUpUser from '../components/SignUp';

describe('Signup Component', () => {
  describe('use jest snapshot to test signup component', () => {
    it('render Signup compenent as expected', async () => {
      const signUpCompenent = render(
        <Provider store={store}>
          <SignUpUser />
        </Provider>,
      );
      expect(await screen.findAllByText('Signup here Please')).toBeTruthy();
      expect(signUpCompenent.asFragment()).toMatchSnapshot();
    });
  });
});
