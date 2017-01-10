import axios from 'axios';

import { FETCH_USERS } from './action_types';

const ROOT_API = 'https://randomuser.me/api/';

// Method using only redux-promise
// Very straighforward, but it doesn't allow us to handle
// different scenarios other than the happy path
// export function fetchUsers() {
//   const request = axios.get(ROOT_API);
//
//   return {
//     type: FETCH_USERS,
//     payload: request
//   }
// }

// Method using redux-thunk
// It gives more control on how we handle error scenarios
// It gives us more power to build custom behaviors
export function fetchUsers() {
  return function(dispatch) {
    dispatch({ type: 'FETCH_USERS' });

    axios.get(ROOT_API)
      .then((response) => {
        dispatch({
          type: 'FETCH_USERS_SUCCESS',
          payload: response.data.results
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_USERS_ERROR',
          payload: error.message
        });
      });
  }
}
