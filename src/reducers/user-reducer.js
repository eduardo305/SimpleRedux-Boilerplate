import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/action_types';

export default function(state = { users: [], pending: true }, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state , users: [], pending: true };
      break;
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, pending: false };
      break;
    case FETCH_USERS_ERROR:
      return { ...state, users: [], pending: false, error: action.payload };
      break;
    default:
      return state;
  }
}
