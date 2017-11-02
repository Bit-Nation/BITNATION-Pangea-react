import { LOGIN, LOGOUT } from '../constants/auth';

export function login(username, password) {
  return {
    type: LOGIN,
    server: {
      params: {
        username,
        password,
      },
    },
  };
}

export function logout(deleteData = false) {
  return {
    type: LOGOUT,
    clear: deleteData,
  };
}
