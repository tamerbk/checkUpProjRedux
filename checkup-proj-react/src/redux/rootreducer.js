// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import memberReducer from './memberReducer';
import ambulanceReducer from './ambulanceReducer';

const rootReducer = combineReducers({
  member: memberReducer,
  ambulances: ambulanceReducer,
});

export default rootReducer;
