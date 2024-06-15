import { md5 } from 'js-md5';
import { ApiResponse, Result } from './dataTypes';
import { Character } from '../presentation/utils/types';
import { cardImage, detailImage } from './constants';

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BASE_URL = 'https://gateway.marvel.com/v1/public';
const LIMIT = '50';

const generateHash = (timestamp: string) => {
	const hashInput = timestamp + PRIVATE_KEY + PUBLIC_KEY;
	return md5(hashInput);
};

const generateUrl = (endpoint: string, limit?: string) => {
	const timeStamp = Date.now().toString();
	const hash = generateHash(timeStamp);

	const queryParams = new URLSearchParams({
		apikey: PUBLIC_KEY,
		ts: timeStamp,
		hash,
	});
	limit && queryParams.append('limit', limit);

	return `${BASE_URL}${endpoint}?${queryParams.toString()}`;
};

async function fetchData<T>(url: string): Promise<T> {
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
}

const mapCharacterData = (data: Result[], type: 'card' | 'detail') => {
	const imageType = type === 'card' ? cardImage : detailImage;

	return data.map((character) => ({
		id: character.id,
		name: character.name,
		description: character.description,
		thumbnail: `${character.thumbnail.path}/${imageType}.${character.thumbnail.extension}`,
	}));
};

export const fetchCharacters = async (): Promise<Character[]> => {
	const url = generateUrl('/characters', LIMIT);
	const responseJson: ApiResponse = await fetchData(url);
	return mapCharacterData(responseJson.data.results, 'card');
};

export const fetchCharacterById = async (
	id: string | number,
): Promise<Character> => {
	const url = generateUrl(`/characters/${id}`);
	const responseJson: ApiResponse = await fetchData(url);
	console.log(responseJson);
	return mapCharacterData(responseJson.data.results, 'detail')[0];
};
