import { ApiResponse } from '../mappers/characters/characterDataTypes';
import { ApiComicResponse } from '../mappers/comics/comicDataTypes';
import { Character, Comic } from '@domain';
import {
	characterFetchLimit,
	comicsFetchLimit,
	comicsOrderBy,
} from './constants';
import { mapCharacterData } from '../mappers/characters/CharacterMapper';
import { mapComicData } from '../mappers/comics/ComicMapper';
import { fetchData, generateUrl } from '../utils/apiHelpers';

export const fetchCharacters = async (
	searchQuery?: string,
): Promise<Character[]> => {
	const queryParams = {
		limit: characterFetchLimit,
		...(searchQuery && { nameStartsWith: searchQuery }),
	};

	const url = generateUrl('/characters', queryParams);
	const responseJson: ApiResponse = await fetchData(url);
	return mapCharacterData(responseJson.data.results, 'card');
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
	const url = generateUrl(`/characters/${id}`);
	const responseJson: ApiResponse = await fetchData(url);
	const comics = await fetchComicsByCharacterId(id);
	return mapCharacterData(responseJson.data.results, 'detail', comics)[0];
};

export const fetchComicsByCharacterId = async (
	id: string,
): Promise<Comic[]> => {
	const url = generateUrl(`/characters/${id}/comics`, {
		limit: comicsFetchLimit,
		orderBy: comicsOrderBy,
	});
	const responseJson: ApiComicResponse = await fetchData(url);
	return mapComicData(responseJson.data.results);
};
