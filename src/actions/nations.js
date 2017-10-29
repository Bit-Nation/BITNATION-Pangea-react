import { NATIONS_ACTIONS } from '../constants/action_types';

export function setCurrentNation(nation) { // eslint-disable-line import/prefer-default-export
  return {
    type: NATIONS_ACTIONS.SET_CURRENT_NATION,
    nation,
  };
}
