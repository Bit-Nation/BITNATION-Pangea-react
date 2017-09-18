import { combineReducers } from 'redux';
import core from './core';
import ui from './ui';
import nations from './nations';

const rootReducer = combineReducers({
  core,
  ui,
  nations,
});

export default rootReducer;
