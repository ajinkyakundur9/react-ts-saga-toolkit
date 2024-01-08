/* eslint-disable @typescript-eslint/no-explicit-any */
import cityApi from '../../../services/dataservices/cityApi';
import { City } from '../../../models/city';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ListResponse } from '../../../models/common';
import { loaderActions } from './loaderSlice';

function* fetchCityList() {
	try {
		const response: ListResponse<City> = yield call(cityApi.getAll);
		yield put(loaderActions.fetchCityListSuccess(response));
	} catch (error: any) {
		console.log(`Failed to fetch city list`, error);
		yield put(loaderActions.fetchCityListFailed(error.message));
	}
}

export default function* citySaga() {
	yield takeLatest(loaderActions.fetchCityList.type, fetchCityList);
}
