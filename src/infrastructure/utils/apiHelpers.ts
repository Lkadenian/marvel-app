import { md5 } from 'js-md5';
import { publicKey, privateKey, baseUrl } from '@infrastructure/api/constants';

export const generateHash = (timestamp: string) => {
	const hashInput = timestamp + privateKey + publicKey;
	return md5(hashInput);
};

export const generateUrl = (
	endpoint: string,
	extraParams: Record<string, string> = {},
) => {
	const timeStamp = Date.now().toString();
	const hash = generateHash(timeStamp);

	const queryData = { apikey: publicKey, ts: timeStamp, hash };
	const urlQueryParams = new URLSearchParams({
		...queryData,
		...extraParams,
	});
	return `${baseUrl}${endpoint}?${urlQueryParams.toString()}`;
};

export const fetchData = async <T>(url: string): Promise<T> => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
		throw error;
	}
};
