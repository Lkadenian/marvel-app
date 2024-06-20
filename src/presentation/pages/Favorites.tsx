import React from 'react';
import useFilterFavorites from '@hooks/useFilterFavorites';
import { Header, CharacterList, SearchBar } from '@components';
import { CharacterListSection } from '@layouts';

const Favorites: React.FC = () => {
	const characters = useFilterFavorites();

	return (
		<>
			<Header />
			<CharacterListSection>
				{characters && (
					<>
						<h1>Favorites</h1>
						<SearchBar resultCount={characters.length} />
						<CharacterList characters={characters} />
					</>
				)}
			</CharacterListSection>
		</>
	);
};

export default Favorites;
