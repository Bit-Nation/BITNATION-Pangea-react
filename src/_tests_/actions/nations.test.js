import configureMockStore  from 'redux-mock-store';

import { setCurrentNation } from '../../actions/nations';
import { NATIONS_ACTIONS } from '../../constants/action_types';

const mockStore = configureMockStore();

describe('nations actions', () => {
  it('Should call setCurrentNation action', () => {
    const nation = 'TestNation';

    const expectedAction = {
      type: NATIONS_ACTIONS.SET_CURRENT_NATION,
      nation,
    };
    const store = mockStore({});

    expect(store.dispatch(setCurrentNation(nation))).toEqual(expectedAction);
  });
});