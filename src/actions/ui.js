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
