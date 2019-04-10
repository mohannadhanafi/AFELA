import { SET_HOME_LAYOUT } from '../actions/actionsTypes';

const initialState = {
  homeLayout: [],

};
function rootReducer(state = initialState, action) {
  if (action.type === SET_HOME_LAYOUT) {
    return {
      ...state,
      homeLayout: action.payload,
    };
  }
  return state;
}
export default rootReducer;
