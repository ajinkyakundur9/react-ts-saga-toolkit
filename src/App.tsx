import React, { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { loaderActions } from './store/actions/loader/loaderSlice';

const App: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loaderActions.fetchCityList());
	}, [dispatch]);

	return (
		<div>
			<h1>Counter</h1>
		</div>
	);
};

export default App;
