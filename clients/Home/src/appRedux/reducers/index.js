import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import related from './related';
import ads from './ads';
import layout from './layout';

const reducers = combineReducers({
  routing: routerReducer,
  related,
  ads,
  layout,
});

export default reducers;
