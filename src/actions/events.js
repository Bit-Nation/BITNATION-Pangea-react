import {
  AUTH_DIALOG_CLOSE,
  AUTH_DIALOG_OPEN,
  DECRYPT,
} from '../constants/events';

export function openAuthDialog() {
  return {
    type: AUTH_DIALOG_OPEN,
  };
}

export function closeAuthDialog() {
  return {
    type: AUTH_DIALOG_CLOSE,
  };
}

export function decryptStorage(passphrase) {
  return (dispatch, getState, eth) => {
    eth.decryptPrivateKey(passphrase, 'Encrypt you private key to display it');

    eth.on('eth:decrypt-private-key', (promise) => {
      promise.then((key) => {
        dispatch({
          type: DECRYPT,
          key,
        });
        dispatch(closeAuthDialog());
      });
    });
  };
}