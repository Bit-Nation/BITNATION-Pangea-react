import { combineReducers } from 'redux';
import core from './core';
import ui from './ui';

const rootReducer = combineReducers({
  core,
  ui,
});

export default rootReducer;
