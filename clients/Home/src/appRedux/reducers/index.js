import { combineReducers } from 'redux';

import options from './options';
import recent from './recent';


const rootReducer = combineReducers({
  options,
  recent,
});

export default rootReducer;
