import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '@infrastructure/api';
import { useCharacters } from '@context/characters';
import { useDebounce } from 'use-debounce';

const useCharacterSearch = (delay?: number) => {
	const { initialCharacterList, setInitialCharacterList } = useCharacters();
	const [characters, setCharacters] = useState(initialCharacterList);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('search') || '';
	const [debouncedSearchQuery] = useDebounce(searchQuery, delay);

	useEffect(() => {
		if (!characters.length)
			fetchCharacters(debouncedSearchQuery).then((characters) => {
				setInitialCharacterList(characters);
				setCharacters(characters);
			});
		if (!debouncedSearchQuery) setCharacters(initialCharacterList);
		if (debouncedSearchQuery)
			fetchCharacters(debouncedSearchQuery).then(setCharacters);
	}, [debouncedSearchQuery]);

	return {
		characters,
		searchQuery,
	};
};

export default useCharacterSearch;
