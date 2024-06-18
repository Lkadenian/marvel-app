import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFavorites } from '@context';
import { CharacterList, SearchBar } from '@components';
import { CharacterListSection } from '@layouts';

const Favorites: React.FC = () => {
	const { favorites } = useFavorites();
	const [characters, setCharacters] = useState(favorites);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('search') || '';

	useEffect(() => {
		setCharacters(
			favorites.filter((character) =>
				character.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()),
			),
		);
	}, [searchQuery]);

	return (
		<CharacterListSection>
			{characters && (
				<>
					<h1>Favorites</h1>
					<SearchBar resultCount={characters.length} />
					<CharacterList characters={characters} />
				</>
			)}
		</CharacterListSection>
	);
};

export default Favorites;
