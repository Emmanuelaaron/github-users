const NEW_USER = 'GITHUB/NEW_USER';
const LOGIN_USER = 'GITHUB/LOGIN_USER';
const ERRORS = 'GITHUB/ERRORS';

const initialState = {
  message: '',
  errors: [],
  session: false,
};

const newUser = (payload) => ({
  type: NEW_USER,
  payload,
});

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

const errors = (payload) => ({
  type: ERRORS,
  payload,
});

export const SignUp = (credentials) => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    redirect: 'follow',
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 201) {
        dispatch(newUser(data));
      } else {
        dispatch(errors(data));
      }
    });
};

export const LoginUser = (credentials) => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    redirect: 'follow',
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 200) {
        dispatch(loginUser(data));
      } else {
        console.log('ghdgdh', data);
        // dispatch(errors(data));
      }
    });
};

const saveSessionLocally = (data) => {
  sessionStorage.setItem('userSession', JSON.stringify({ token: data }));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      saveSessionLocally(action.payload.token);

      return {
        ...state,
        message: action.payload.message,
        session: true,
      };

    case LOGIN_USER:
      saveSessionLocally(action.payload.token);
      console.log('iiiiiiiiiiiiiiiiiiiiiii', action.payload.token, 'llllllllll');
      return {
        ...state,
        message: action.payload.message,
        session: true,
      };

    case (ERRORS): {
      const errors = [];
      Object.entries(action.payload).forEach((error) => {
        errors.push(`${error[0]}, ${error[1][0]}`);
      });
      return {
        ...state,
        message: '',
        errors,
      }; }
    default:
      return state;
  }
};

export default reducer;
