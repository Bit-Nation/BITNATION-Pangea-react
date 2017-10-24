import { APP_STATUS } from '../constants/status_types';
import { CORE_ACTIONS } from '../constants/action_types';

const initialState = {
  appStatus: APP_STATUS.INACTIVE,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CORE_ACTIONS.LOADING:
      return {
        ...state,
        appStatus: APP_STATUS.STARTING,
      };
    case CORE_ACTIONS.LOADED:
      return {
        ...state,
        appStatus: APP_STATUS.RUNNING,
      };
    default:
      return state;
  }
};
