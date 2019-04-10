import { GET_RELATED, SET_RELATED } from './actionsTypes';

export const getRelated = () => ({ type: GET_RELATED });

export const setRelated = posts => ({ type: SET_RELATED, payload: posts });
