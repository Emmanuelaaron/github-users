import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionReducer from './session/Session';
import githubUsersReducer from './github/Github';

const reducer = combineReducers({
  session: sessionReducer,
  users: githubUsersReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
