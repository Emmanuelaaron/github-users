import UserForm from './UserForm';
import { SignUp } from '../redux/session/Session';

const SignUpUser = () => (
  <UserForm action="SignUp" userActionMethod={SignUp} />
);
export default SignUpUser;
