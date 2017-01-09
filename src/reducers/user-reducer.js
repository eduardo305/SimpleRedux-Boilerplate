import { FETCH_USERS } from '../actions/action_types';

export default function(state = { users: [] }, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload.data.results };
      break;
    default:
      return state;
  }
}
