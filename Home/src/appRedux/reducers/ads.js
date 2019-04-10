import { SET_PAGE_ADS } from '../actions/actionsTypes';

const initialState = {
  pageName: 'home',
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_PAGE_ADS) {
    return {
      ...state,
      pageName: action.payload,
    };
  }
  return state;
}
export default rootReducer;
