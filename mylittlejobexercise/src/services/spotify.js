import 'whatwg-fetch';
import config from '../config';

const search = ({q, type}) => fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${config.token}`
  }
});

export default search;
