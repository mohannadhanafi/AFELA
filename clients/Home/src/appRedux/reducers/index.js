import { combineReducers } from 'redux';

import options from './options';
import trending from './trending';

const rootReducer = combineReducers({
  options,
  trending,
});

export default rootReducer;
