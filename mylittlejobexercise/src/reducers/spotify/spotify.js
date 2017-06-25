import * as types from './constants';

const initialState = {
  loading: false,
  results: {},
  error: '',
  filter: 'album'
}

const spotify = (state = initialState, action) => {
  const { type, error, filter, payload } = action;

  switch(type) {
    case types.SET_FILTER:
      return {
        ...state,
        filter
      };
    case types.SPOTIFY_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.SPOTIFY_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error
      };
    case types.SPOTIFY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        results: payload
      }
    default:
      return state
  }
};

export default spotify;
