import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacters } from '../../context/context';

const CharacterDetailPage: React.FC = () => {
	const { characterId } = useParams<{ characterId: string }>();
	const { characters } = useCharacters();
	const character = characters.find(
		(char) => char.id === parseInt(characterId),
	);

	if (!character) {
		return <div>Character not found</div>;
	}

	return (
		<div>
			<h1>{character.name}</h1>
			<img src={character.thumbnail} alt={character.name} />
			<p>Description of the character...</p>
			{/* List comics here */}
		</div>
	);
};

export default CharacterDetailPage;
