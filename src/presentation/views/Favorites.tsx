import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharacterListSection from '../layouts/CharaceterListSection/CharacterListSection';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import { useFavorites } from '../../context/favorites';

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
	}, [characters, searchQuery]);

	return (
		<CharacterListSection>
			{characters && (
				<>
					<h1>Favorites</h1>
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

export default Favorites;
