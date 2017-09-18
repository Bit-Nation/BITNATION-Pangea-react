import { NATIONS_ACTIONS } from '../constants/action_types';

const nations = [{
  name: 'Bitnation',
  type: 'Holacracy',
  reputation: 500,
},
{
  name: 'Mordor',
  type: 'Dictatorship',
  reputation: -100,
}];

const initialState = {
  nations,
  nation: nations[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NATIONS_ACTIONS.SET_CURRENT_NATION:
      return {
        ...state,
        nation: action.nation,
      };
    default:
      return state;
  }
};
