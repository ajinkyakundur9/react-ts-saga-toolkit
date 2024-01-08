import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ListResponse } from '../../../models/common';
import { City } from '../../../models/city';

export interface LoaderState {
	isLoading: boolean;
	list: City[];
}

const initialState: LoaderState = {
	isLoading: false,
	list: [],
};

const loaderSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		fetchCityList(state) {
			state.isLoading = true;
		},
		fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
			state.isLoading = false;
			state.list = action.payload.data;
		},
		fetchCityListFailed(state, action: PayloadAction<string>) {
			state.isLoading = false;
			console.log('data = ', action);
		},
	},
});

// Actions
export const loaderActions = loaderSlice.actions;

// Selectors
export const loaderLoading = (state: RootState) => state.loader.isLoading;

// Reducer
const loaderReducer = loaderSlice.reducer;
export default loaderReducer;
