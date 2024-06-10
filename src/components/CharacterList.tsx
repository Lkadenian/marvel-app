import React, { useEffect } from 'react';
import CharacterCard from './CharacterCard';

interface CharacterListProps {
	characters: any;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
	if (!characters) return null;
	return (
		<div>
			{characters.map((character: any) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	);
};

export default CharacterList;
