import React from 'react';

interface CharacterCardProps {
	key: 'string';
	character: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	return (
		<div>
			<img src={character.imageUrl} alt={character.name} />
			<h3>{character.name}</h3>
			<button>button</button>
		</div>
	);
};

export default CharacterCard;
