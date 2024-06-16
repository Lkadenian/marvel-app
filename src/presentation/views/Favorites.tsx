import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
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
		<>
			<Header />
			<ContentWrapper>
				<h1>Favorites</h1>
				{characters && (
					<>
						<SearchBar
							resultCount={characters.length}
							value={searchQuery}
						/>
						<CharacterList characters={characters} />
					</>
				)}
			</ContentWrapper>
		</>
	);
};

export default Favorites;
