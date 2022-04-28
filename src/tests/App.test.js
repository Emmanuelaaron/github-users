import { render, screen } from '@testing-library/react';
import App from '../App';
describe('Login Component', () => {
  describe('use jest snapshot to test main App', () => {
    it('render main app component as expected', async () => {
      const signUpCompenent = render(
        <App />
      );
      expect(signUpCompenent.asFragment()).toMatchSnapshot();
    });
  });
});
