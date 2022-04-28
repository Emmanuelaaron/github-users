import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Nav } from 'react-bootstrap';

const UserForm = (props) => {
  const {
    action, userActionMethod, myAction, myLink,
  } = props;

  const [userInput, setUserIput] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const userAction = bindActionCreators(userActionMethod, dispatch);
  const errors = useSelector((state) => state.session.errors);

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
    <div className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5 ">
      <h1>
        {action}
        {' '}
        here Please
      </h1>
      <Form className="w-50" onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex flex-column">
            <Form.Label>Username</Form.Label>
            <Form.Label className="text-danger">{errors[0]}</Form.Label>
          </div>
          <Form.Control type="text" placeholder="Enter username" value={userInput.username} onChange={setUserName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={userInput.password} onChange={setPassword} />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit" onClick={signUserHandler}>
            {action}
          </Button>
          <Nav.Link href={myLink}>{myAction}</Nav.Link>
        </div>
      </Form>
    </div>
  );
};

UserForm.propTypes = {
  action: PropTypes.string.isRequired,
  userActionMethod: PropTypes.func.isRequired,
  myAction: PropTypes.string.isRequired,
  myLink: PropTypes.string.isRequired,
};

export default UserForm;
