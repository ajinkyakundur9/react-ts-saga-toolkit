/* eslint-disable @typescript-eslint/no-explicit-any */
export const headerContentWithOutAuthorization: any = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Credentials': 'true',
};

export const customHeaders = (token: any) => {
	const copiedHeaderContentWithAuthorization: any = {
		...headerContentWithOutAuthorization,
	};
	copiedHeaderContentWithAuthorization['Authorization'] = `Bearer ${token}`;
	return { headers: copiedHeaderContentWithAuthorization };
};

export const customHeadersForFile = (token: any) => {
	const copiedHeaderContentWithAuthorization: any = {
		...headerContentWithOutAuthorization,
		'Content-Type': 'multipart/form-data',
	};
	copiedHeaderContentWithAuthorization['Authorization'] = `Bearer ${token}`;
	return { headers: copiedHeaderContentWithAuthorization };
};
