import { md5 } from 'js-md5';
import { ApiResponse } from './dataTypes';
import { Character } from '../presentation/utils/types';
import { cardImage } from './constants';

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

function generateHash(timestamp: string) {
	const hashInput = timestamp + PRIVATE_KEY + PUBLIC_KEY;
	return md5(hashInput);
}

export const fetchCharacters = async (): Promise<Character[]> => {
	console.log('fetchCharacters');
	const BASE_URL = 'https://gateway.marvel.com/v1/public';
	const LIMIT = '50';
	const timeStamp = Date.now().toString();
	const hash = generateHash(timeStamp);

	const url = `${BASE_URL}/characters?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}&limit=${LIMIT}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const responseJson: ApiResponse = await response.json();
		return responseJson.data.results.map((character) => ({
			id: character.id,
			name: character.name,
			thumbnail: `${character.thumbnail.path}/${cardImage}.${character.thumbnail.extension}`,
			isLiked: false,
		}));
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
		throw error;
	}
};
