import axios from 'axios';
import { SET_OPTIONS } from './types';

const setOptions = options => ({
  type: SET_OPTIONS,
  payload: options,
});

const getOptions = () => dispatch => axios.get('/api/v1/getoptions').then((result) => {
  const { data } = result;
  dispatch(setOptions(data));
}).catch(() => {

});

export default getOptions;
