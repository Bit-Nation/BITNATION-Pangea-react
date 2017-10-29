import configureMockStore  from 'redux-mock-store';

import {
  closeDrawer,
  openDrawer,
  changeScreen,
  changeTitle
} from '../../actions/ui';
import { UI_ACTIONS } from '../../constants/action_types';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ui actions', () => {
  it('Should call openDrawer action', () => {
    const expectedAction = {
      type: UI_ACTIONS.OPEN_DRAWER
    };

    expect(store.dispatch(openDrawer())).toEqual(expectedAction);
  });

  it('Should call closeDrawer action', () => {
    const expectedAction = {
      type: UI_ACTIONS.CLOSE_DRAWER
    };

    expect(store.dispatch(closeDrawer())).toEqual(expectedAction);
  });

  it('Should call changeScreen action', () => {
    const nextScreen = 'test';

    const expectedAction = {
      type: UI_ACTIONS.CHANGE_SCREEN,
      nextScreen
    };

    expect(store.dispatch(changeScreen(nextScreen))).toEqual(expectedAction);
  });

  it('Should call changeTitle action', () => {
    const title = 'test';

    const expectedAction = {
      type: UI_ACTIONS.CHANGE_TITLE,
      title
    };

    expect(store.dispatch(changeTitle(title))).toEqual(expectedAction);
  });

});