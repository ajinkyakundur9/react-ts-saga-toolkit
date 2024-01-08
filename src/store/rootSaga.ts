import loaderSaga from './actions/loader/loaderSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([loaderSaga()]);
}
