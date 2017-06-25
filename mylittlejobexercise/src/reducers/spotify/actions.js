import * as types from './constants';
import search from '../../services/spotify';

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
});

export const spotifyRequest = () => ({
  type: types.SPOTIFY_REQUEST
});

export const spotifyRequestSuccess = payload => ({
  type: types.SPOTIFY_REQUEST_SUCCESS,
  payload
});

export const spotifyRequestFail = error => ({
  type: types.SPOTIFY_REQUEST_FAIL,
  error
});

export const searchSpotify = searchInput => ((dispatch) => {
  dispatch(spotifyRequest())
  return search(searchInput)
    .then(response => response.json())
    .then((response) => {
      if (response.error) {
        return dispatch(spotifyRequestFail(response.error.message))
      }
      dispatch(spotifyRequestSuccess(response));
    });
});
