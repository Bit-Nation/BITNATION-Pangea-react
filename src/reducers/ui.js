import { UI_ACTIONS } from '../constants/action_types';

const initialState = {
  isDrawerOpen: false,
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
    default:
      return state;
  }
};
