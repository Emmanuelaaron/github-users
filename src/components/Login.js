import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Card } from 'react-bootstrap';
import UserForm from './UserForm';
import { LoginUser } from '../redux/session/Session';
import { fetchGithubUsers } from '../redux/github/Github';

const Login = () => {
  const currentState = useSelector((state) => state.session);
  const [language, setLanguage] = useState({
    lang: '',
  });

  const disptach = useDispatch();
  const loadGithubUsersAction = bindActionCreators(fetchGithubUsers, disptach);
  const users = useSelector((state) => state.users);

  const setProgramingLanguage = (e) => {
    setLanguage(() => ({
      lang: e.target.value,
    }));
  };

  const fetchLang = () => {
    loadGithubUsersAction(language);
    setLanguage(() => ({
      lang: '',
    }));
  };
  return (
    (!currentState.session)
      ? <UserForm action="Login" userActionMethod={LoginUser} />
      : (
        <div className="d-flex flex-column align-items-center pt-5 mb-4">
          <Form className="w-50" onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search users by Language</Form.Label>
              <Form.Control type="text" placeholder="Enter Language" value={language.lang} onChange={setProgramingLanguage} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={fetchLang}>
              Search
            </Button>
          </Form>
          <div className="d-flex flex-wrap justify-content-center mt-5">
            {
              users.map((user) => (
                <Card style={{ width: '18rem' }} key={users.indexOf(user) + 1} className="m-2">
                  <Card.Img variant="top" src={user.avatar} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                      {user.description}
                    </Card.Text>
                    <Card.Link href={user.url}>{user.repo.name}</Card.Link>
                  </Card.Body>
                </Card>
              ))
            }
          </div>
        </div>
      )
  );
};
export default Login;
