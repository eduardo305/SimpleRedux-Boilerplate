import axios from 'axios';

import { FETCH_USERS } from './action_types';

const ROOT_API = 'https://randomuser.me/api/';

export function fetchUsers() {
  const request = axios.get(ROOT_API);

  return {
    type: FETCH_USERS,
    payload: request
  }
}
