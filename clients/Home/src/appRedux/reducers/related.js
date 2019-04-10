import { SET_RELATED } from '../actions/actionsTypes';

const initialState = {
  relatedPosts: [],

};
function rootReducer(state = initialState, action) {
  if (action.type === SET_RELATED) {
    return {
      ...state,
      relatedPosts: action.payload,
    };
  }
  return state;
}
export default rootReducer;
