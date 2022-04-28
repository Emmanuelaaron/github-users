import UserForm from './UserForm';
import { SignUp } from '../redux/session/Session';

const SignUpUser = () => (
  <UserForm action="Signup" userActionMethod={SignUp} myAction="Login" myLink="/" />
);
export default SignUpUser;
