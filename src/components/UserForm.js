import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'react-bootstrap';

const UserForm = (props) => {
  const { action, userActionMethod } = props;

  const [userInput, setUserIput] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const userAction = bindActionCreators(userActionMethod, dispatch);

  const signUserHandler = () => {
    userAction(userInput);
    setUserIput((prev) => ({
      ...prev,
      username: '',
      password: '',
    }));
  };

  const setUserName = (e) => {
    setUserIput((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const setPassword = (e) => {
    setUserIput((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-50" onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={userInput.username} onChange={setUserName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={userInput.password} onChange={setPassword} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={signUserHandler}>
          {action}
        </Button>
      </Form>
    </div>
  );
};

UserForm.propTypes = {
  action: PropTypes.string.isRequired,
  userActionMethod: PropTypes.func.isRequired,
};

export default UserForm;
