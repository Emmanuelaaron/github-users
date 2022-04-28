import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/ConfigureStore';
import SignUpUser from '../components/SignUp';

describe('Login Component', () => {
  describe('use jest snapshot to test login component', () => {
    it('render Login compenent as expected', async () => {
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
