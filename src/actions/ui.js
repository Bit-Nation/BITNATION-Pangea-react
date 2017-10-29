import { UI_ACTIONS } from '../constants/action_types';

export function openDrawer() {
  return {
    type: UI_ACTIONS.OPEN_DRAWER,
  };
}

export function closeDrawer() {
  return {
    type: UI_ACTIONS.CLOSE_DRAWER,
  };
}

export function changeScreen(nextScreen) {
  return {
    type: UI_ACTIONS.CHANGE_SCREEN,
    nextScreen,
  };
}

export function changeTitle(title) {
  return {
    type: UI_ACTIONS.CHANGE_TITLE,
    title,
  };
}
