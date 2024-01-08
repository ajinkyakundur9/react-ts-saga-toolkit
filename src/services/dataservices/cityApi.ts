import { City } from '../../models/city';
import axiosClient from '../axiosClient';
import { ListResponse } from '../../models/common';

const cityApi = {
	getAll(): Promise<ListResponse<City>> {
		const url = '/cities';
		return axiosClient.get(url, {
			params: {
				_page: 1,
				_limit: 10,
			},
		});
	},
};

export default cityApi;
