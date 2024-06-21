import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '@infrastructure/api/api';
import { Character } from '@domain';
import { useLoading } from '@context';

const useFetchCharacterDetail = (): Character => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character>();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);
		fetchCharacterById(id)
			.then(setCharacter)
			.then(() => setIsLoading(false));
	}, []);

	return character;
};

export default useFetchCharacterDetail;
