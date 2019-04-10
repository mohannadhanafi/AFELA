import { GET_HOME_LAYOUT, SET_HOME_LAYOUT } from './actionsTypes';

export const getHomeLayout = () => ({ type: GET_HOME_LAYOUT });
export const setHomeLayout = layouts => ({ type: SET_HOME_LAYOUT, payload: layouts });
