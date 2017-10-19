import { CORE_ACTIONS } from '../constants/action_types';

export function startApp() {
  return (dispatch) => {
    dispatch({
      type: CORE_ACTIONS.LOADING,
    });

    // TODO: Do real startup stuff and delete the code below
    setTimeout(() => {
      dispatch({
        type: CORE_ACTIONS.LOADED,
      });
    }, 2000);
  };
}
