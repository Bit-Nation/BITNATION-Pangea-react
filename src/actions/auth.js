import { LOGIN, LOGOUT } from '../constants/auth';
import { ToastAndroid } from 'react-native';

export function login(username, password) {
  return {
    type: LOGIN,
    server: {
      params: {
        username,
        password,
      },
    },
    done: () => {
      ToastAndroid.show('Login was success', ToastAndroid.SHORT);
    },
  };
}

export function logout(deleteData = false) {
  return {
    type: LOGOUT,
    clear: deleteData,
  };
}
