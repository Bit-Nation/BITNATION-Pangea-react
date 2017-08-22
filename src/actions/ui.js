import { UI_ACTIONS } from '../constants/action_types';
import { SCREEN_TYPES } from '../constants/status_types';

export function openDrawer() {
  return (dispatch) => {
    dispatch({
      type: UI_ACTIONS.OPEN_DRAWER,
    });
  };
}

export function closeDrawer() {
  return (dispatch) => {
    dispatch({
      type: UI_ACTIONS.CLOSE_DRAWER,
    });
  };
}

export function changeScreen(nextScreen) {
  return (dispatch) => {
    dispatch({
      type: UI_ACTIONS.CHANGE_SCREEN,
      nextScreen,
    });
  };
}
