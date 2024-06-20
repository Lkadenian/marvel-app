import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '@infrastructure/api';
import { useCharacters, useLoading } from '@context';

const useCharactersFetch = () => {
	const { initialCharacterList, setInitialCharacterList } = useCharacters();
	const { setIsLoading } = useLoading();
	const [characters, setCharacters] = useState(initialCharacterList);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('search') || '';

	useEffect(() => {
		if (!searchQuery && !initialCharacterList.length) {
			setIsLoading(true);
			fetchCharacters(searchQuery).then((characters) => {
				setIsLoading(false);
				setInitialCharacterList(characters);
				setCharacters(characters);
			});
		}
		if (!searchQuery && initialCharacterList.length) {
			setCharacters(initialCharacterList);
		}
		if (searchQuery) {
			setIsLoading(true);
			fetchCharacters(searchQuery).then((characters) => {
				setIsLoading(false);
				setCharacters(characters);
			});
		}
	}, [searchQuery]);

	return {
		characters,
	};
};

export default useCharactersFetch;
