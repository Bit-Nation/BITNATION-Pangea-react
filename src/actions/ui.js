import { UI_ACTIONS } from '../constants/action_types';

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

export function changeTitle(title) {
  return (dispatch) => {
    dispatch({
      type: UI_ACTIONS.CHANGE_TITLE,
      title,
    });
  };
}
