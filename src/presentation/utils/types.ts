export interface Character {
	id: string;
	name: string;
	thumbnail: string;
	description: string;
	comics?: Comic[];
}

export interface Comic {
	id: string;
	title: string;
	year: string;
	thumbnail: string;
}

export type Favorites = string[];
