import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session/Session';
import githubUsersReducer from './github/Github';

const reducer = combineReducers({
  session: sessionReducer,
  users: githubUsersReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
