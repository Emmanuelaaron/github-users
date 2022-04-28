import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/ConfigureStore';
import Login from '../components/Login';

describe('Login Component', () => {
  describe('use jest snapshot to test login component', () => {
    it('render Login compenent as expected', async () => {
      const loginCompenent = render(
        <Provider store={store}>
          <Login />
        </Provider>,
      );
      expect(await screen.findAllByText('Login here Please')).toBeTruthy();
      expect(loginCompenent.asFragment()).toMatchSnapshot();
    });
  });
});
