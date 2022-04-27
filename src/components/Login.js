import { useSelector } from 'react-redux';
import UserForm from './UserForm';
import { LoginUser } from '../redux/session/Session';

const Login = () => {
  const currentState = useSelector((state) => state.session);
  return (
    (!currentState.session)
      ? <UserForm action="Login" userActionMethod={LoginUser} />
      : <h1>data here. yo logged in</h1>
  );
};
export default Login;
