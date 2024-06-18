import React from 'react';
import useCharactersFetch from '@hooks/useCharactersFetch';
import { CharacterListSection } from '@layouts';
import { CharacterList, SearchBar } from '@components';

const Characters: React.FC = () => {
	const { characters, searchQuery } = useCharactersFetch(600);

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
