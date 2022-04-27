// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import UserForm from './UserForm';
import { SignUp } from '../redux/session/Session';

const SignUpUser = () => (
  <UserForm action="SignUp" userActionMethod={SignUp} />
);
export default SignUpUser;
