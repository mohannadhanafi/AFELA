import axios from 'axios';
import { SET_TRENDING } from './types';

const setTrending = posts => ({
  type: SET_TRENDING,
  payload: posts,
});

const getTrending = () => dispatch => axios.get('/api/v1/posts/trendingPosts').then((result) => {
  const { data } = result;
  dispatch(setTrending(data));
}).catch(() => {

});

export default getTrending;
