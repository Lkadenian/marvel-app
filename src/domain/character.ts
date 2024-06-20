import Comic from './comic';

export default interface Character {
	id: string;
	name: string;
	thumbnail: string;
	description: string;
	comics?: Comic[];
}
