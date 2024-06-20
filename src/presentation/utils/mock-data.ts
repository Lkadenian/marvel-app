import { Character, Comic } from '@domain';

export const mockComicList: Comic[] = [
	{
		id: '1',
		title: 'Comic 1',
		thumbnail: 'image-url.jpg',
		year: '2020',
	},
	{
		id: '2',
		title: 'Comic 2',
		thumbnail: 'image-url2.jpg',
		year: '2021',
	},
];

export const mockCharacter: Character = {
	id: '1',
	name: 'Character Name',
	description: 'Character Description',
	thumbnail: 'image-url.jpg',
	comics: mockComicList,
};

export const mockCharacterList: Character[] = [
	{ ...mockCharacter },
	{
		id: '2',
		name: 'Character 2',
		description: 'Description 2',
		thumbnail: 'image-url2.jpg',
	},
];
