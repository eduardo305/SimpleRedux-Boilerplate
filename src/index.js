import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import UserReducer from './reducers/user-reducer';
import { fetchUsers } from './actions/index';

const middleware = applyMiddleware(promise, thunk, logger());
let store = createStore(UserReducer, middleware);

// Initial state
console.log(store.getState());

store.dispatch(fetchUsers()).then((response) => {
  console.table(response);
});

// store.dispatch(( dispatch ) => {
//   dispatch(fetchUsers()).then((response) => {
//     console.table(response);
//   });
// });
