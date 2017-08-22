import { UI_ACTIONS } from '../constants/action_types';
import { SCREEN_TYPES } from '../constants/status_types';

const initialState = {
  isDrawerOpen: false,
  currentScreen: SCREEN_TYPES.WELCOME
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTIONS.OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true,
      };
    case UI_ACTIONS.CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false,
      };
    case UI_ACTIONS.CHANGE_SCREEN:
      return {
        ...state,
        currentScreen: action.nextScreen,
      };
    default:
      return state;
  }
};
