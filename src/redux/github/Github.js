const LOAD_GITHUB_USERS = 'GITHUB/FETCH_GITHUB_USERS';

const initialState = [];

const users = (payload) => ({
  type: LOAD_GITHUB_USERS,
  payload,
});

export const fetchGithubUsers = (lang) => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('userSession'));
  await fetch('http://localhost:3000/api/v1/api-user-call', {
    method: 'POST',
    body: JSON.stringify(lang),
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 200) {
        dispatch(users(data.users));
      }
    });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GITHUB_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
