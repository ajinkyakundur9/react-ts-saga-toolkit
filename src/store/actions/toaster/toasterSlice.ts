import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface Toaster {}

const initialState: Toaster = {};

const toasterSlice = createSlice({
	name: 'toaster',
	initialState,
	reducers: {},
});

// Actions
export const toasterActions = toasterSlice.actions;

// Selectors
export const toaster = (state: RootState) => state.toaster;

// Reducer
const toasterReducer = toasterSlice.reducer;
export default toasterReducer;
