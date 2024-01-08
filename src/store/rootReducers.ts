import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import loaderReducer from './actions/loader/loaderSlice';
import { history } from '../utils';

export const rootReducer = combineReducers({
	router: connectRouter(history),
	loader: loaderReducer,
});
