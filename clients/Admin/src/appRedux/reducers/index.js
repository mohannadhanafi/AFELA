import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import Auth from './Auth';
import Notifications from './Notifications';
import install from './install';
import form from './form';
import options from './options';

const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  notifications: Notifications,
  install,
  opations: options,
  form,
});

export default reducers;
