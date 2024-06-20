import React from 'react';
import useFetchCharacters from '@hooks/useFetchCharacters';
import { CharacterListSection } from '@layouts';
import { Header, CharacterList, SearchBar } from '@components';

const Characters: React.FC = () => {
	const characters = useFetchCharacters();

	return (
		<>
			<Header />
			<CharacterListSection>
				{characters && (
					<>
						<SearchBar resultCount={characters.length} />
						<CharacterList characters={characters} />
					</>
				)}
			</CharacterListSection>
		</>
	);
};

export default Characters;
