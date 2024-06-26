import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '@infrastructure/api/api';
import { useCharacters, useLoading } from '@context';
import { Character } from '@domain';

const useFetchCharacters = (): Character[] => {
	const { initialCharacterList, setInitialCharacterList } = useCharacters();
	const { setIsLoading } = useLoading();
	const [characters, setCharacters] = useState(initialCharacterList);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('search') || '';

	useEffect(() => {
		if (searchQuery !== '') {
			setIsLoading(true);
			fetchCharacters(searchQuery).then((characters) => {
				setIsLoading(false);
				setCharacters(characters);
			});
			return;
		}
		if (!initialCharacterList.length) {
			setIsLoading(true);
			fetchCharacters(searchQuery).then((characters) => {
				setIsLoading(false);
				setInitialCharacterList(characters);
				setCharacters(characters);
			});
		} else {
			setCharacters(initialCharacterList);
		}
	}, [searchQuery]);

	return characters;
};

export default useFetchCharacters;
