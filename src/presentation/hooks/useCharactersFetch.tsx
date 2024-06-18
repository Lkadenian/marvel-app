import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '@infrastructure/api';
import { useCharacters, useLoading } from '@context';
import { useDebounce } from 'use-debounce';

const useCharactersFetch = (delay?: number) => {
	const { initialCharacterList, setInitialCharacterList } = useCharacters();
	const { setIsLoading } = useLoading();
	const [characters, setCharacters] = useState(initialCharacterList);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('search') || '';
	const [debouncedSearchQuery] = useDebounce(searchQuery, delay);

	useEffect(() => {
		console.log('EFFECTO');

		if (!debouncedSearchQuery && initialCharacterList.length) {
			console.log('|||| skip fetching');

			setCharacters(initialCharacterList);
		}
		if (!debouncedSearchQuery && !initialCharacterList.length) {
			console.log('|||| fetching inicial');
			setIsLoading(true);
			fetchCharacters(debouncedSearchQuery).then((characters) => {
				setIsLoading(false);
				setInitialCharacterList(characters);
				setCharacters(characters);
			});
		}
		if (debouncedSearchQuery) {
			console.log('|||| fetching de busqueda');

			setIsLoading(true);
			fetchCharacters(debouncedSearchQuery).then((characters) => {
				setIsLoading(false);
				setCharacters(characters);
			});
		}
	}, [debouncedSearchQuery]);

	return {
		characters,
		searchQuery,
	};
};

export default useCharactersFetch;
