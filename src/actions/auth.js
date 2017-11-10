import { LOGIN, LOGOUT } from '../constants/auth';
import { changeScreen } from '../actions/ui';
import { SCREEN_TYPES } from '../constants/status_types';

export function login(username, password) {
  return dispatch => dispatch({
    type: LOGIN,
    server: {
      params: {
        username,
        password,
      },
    },
    done: () => {
      dispatch(changeScreen(SCREEN_TYPES.WELCOME));
    },
  });
}

export function logout(deleteData = false) {
  return {
    type: LOGOUT,
    clear: deleteData,
  };
}
