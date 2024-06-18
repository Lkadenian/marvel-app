import React from 'react';
import useCharactersFetch from '@hooks/useCharactersFetch';
import { CharacterListSection } from '@layouts';
import { CharacterList, SearchBar } from '@components';

const Characters: React.FC = () => {
	const { characters } = useCharactersFetch();

	return (
		<CharacterListSection>
			{characters && (
				<>
					<SearchBar resultCount={characters.length} />
					<CharacterList characters={characters} />
				</>
			)}
		</CharacterListSection>
	);
};

export default Characters;
