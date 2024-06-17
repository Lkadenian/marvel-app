import React from 'react';
import useCharacterSearch from '@hooks/useCharacterSearch';
import { CharacterListSection } from '@layouts';
import { CharacterList, SearchBar } from '@components';

const Characters: React.FC = () => {
	const { characters, searchQuery } = useCharacterSearch(600);

	return (
		<CharacterListSection>
			{characters && (
				<>
					<SearchBar
						resultCount={characters.length}
						value={searchQuery}
					/>
					<CharacterList characters={characters} />
				</>
			)}
		</CharacterListSection>
	);
};

export default Characters;
