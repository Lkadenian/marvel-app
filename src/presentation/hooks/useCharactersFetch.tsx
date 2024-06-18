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
		console.log('characters.length', characters);
		console.log('initialCharacterList', initialCharacterList);
		console.log('debouncedSearchQuery', debouncedSearchQuery);

		if (!debouncedSearchQuery) {
			console.log('1');

			if (!initialCharacterList.length) {
				setIsLoading(true);
				fetchCharacters(debouncedSearchQuery).then((characters) => {
					setIsLoading(false);
					setInitialCharacterList(characters);
					setCharacters(characters);
				});
			} else {
				console.log('2');

				setCharacters(initialCharacterList);
			}
		} else {
			console.log('3');

			setIsLoading(true);
			fetchCharacters(debouncedSearchQuery)
				.then(setCharacters)
				.then(() => setIsLoading(false));
		}
	}, [debouncedSearchQuery]);

	return {
		characters,
		searchQuery,
	};
};

export default useCharactersFetch;
