import { combineReducers } from 'redux';
import spotify from './spotify/spotify';

const appReducer = combineReducers({
	spotify
});

export default appReducer;
