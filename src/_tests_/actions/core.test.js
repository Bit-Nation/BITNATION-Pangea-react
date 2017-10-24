import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startApp } from '../../actions/core';
import { CORE_ACTIONS } from '../../constants/action_types';
import reducer from '../../reducers/core';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('core actions', () => {
  it('should call startApp action ', () => {
    const expectedActions = [
      {
        type: CORE_ACTIONS.LOADING,
      },
      {
        type: CORE_ACTIONS.LOADED,
      }
    ];

    const store = mockStore({ core: reducer() });

    return store.dispatch(startApp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
});