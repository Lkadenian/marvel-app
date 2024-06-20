import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFavorites } from '@context';
import { Character } from '@domain';

const useFilterFavorites = (): Character[] => {
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
	}, [favorites, searchQuery]);

	return characters;
};

export default useFilterFavorites;
