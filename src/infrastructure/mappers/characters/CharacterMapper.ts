import { Result } from './characterDataTypes';
import {
	cardImageVariant,
	detailImageVariant,
} from '@infrastructure/api/constants';
import { Character, Comic } from '@domain';

export const mapCharacterData = (
	data: Result[],
	type: 'card' | 'detail',
	comics?: Comic[],
): Character[] => {
	const imageType = type === 'card' ? cardImageVariant : detailImageVariant;

	return data.map((character) => ({
		id: character.id.toString(),
		name: character.name,
		description: character.description,
		thumbnail: `${character.thumbnail.path.replace('http://', 'https://')}/${imageType}.${character.thumbnail.extension}`,
		comics: comics,
	}));
};
