import { AUTH_DIALOG_OPEN, AUTH_DIALOG_CLOSE } from '../constants/events';

const defaultState = {
  authDialogVisible: false,
};

export default function events(state = defaultState, action = {}) {
  switch (action.type) {
    case AUTH_DIALOG_OPEN:
      return {
        ...state,
        authDialogVisible: true,
      };
    case AUTH_DIALOG_CLOSE:
      return {
        ...state,
        authDialogVisible: false,
      };
    default:
      return state;
  }
}
