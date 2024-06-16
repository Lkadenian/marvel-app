import { Result } from './characterDataTypes';
import { cardImageVariant, detailImageVariant } from '../../constants';
import { Character, Comic } from '../../../presentation/utils/types';

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
		thumbnail: `${character.thumbnail.path}/${imageType}.${character.thumbnail.extension}`,
		comics: comics,
	}));
};
