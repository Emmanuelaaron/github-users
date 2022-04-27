const NEW_USER = 'GITHUB/NEW_USER';

const initialState = {
  token: '',
  message: '',
  errors: [],
};

export const newUser = (payload) => ({
  type: NEW_USER,
  payload,
});

export const SignUp = (credentials) => async (dispatch) => {
  console.log('-------------++++++++', credentials, '+++++++++++----------------------');
  await fetch('http://localhost:3000/api/v1/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    redirect: 'follow',
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 201) {
        console.log('yeass', data);
        dispatch(newUser(data));
      } else {
        console.log('errors', data);
        dispatch(newUser(data));
      }
    }).catch(() => {
      // setSignup(false);
    });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default reducer;
