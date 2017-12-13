import { combineReducers } from 'redux';
import core from './core';
import ui from './ui';
import nations from './nations';
import events from './events';

const rootReducer = combineReducers({
  core,
  events,
  ui,
  nations,
});

export default rootReducer;
