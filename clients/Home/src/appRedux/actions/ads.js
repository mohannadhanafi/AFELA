import { SET_PAGE_ADS, GET_PAGE_ADS } from './actionsTypes';


export const setPageAds = page => ({ type: SET_PAGE_ADS, payload: page });
export const getPageAds = () => ({ type: GET_PAGE_ADS });
