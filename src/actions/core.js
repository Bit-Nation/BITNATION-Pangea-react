import { CORE_ACTIONS } from '../constants/action_types';

export function startApp() {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: CORE_ACTIONS.LOADING,
      });

      // TODO: Do real startup stuff and delete the code below
      setTimeout(() => {
        resolve(dispatch({
          type: CORE_ACTIONS.LOADED,
        }));
      }, 2000);
    })
  };
}
