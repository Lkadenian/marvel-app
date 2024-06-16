import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import { Character } from '../utils/types';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import ComicsSection from '../components/ComicsSection/ComicsSection';

const CharacterDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character>();

	useEffect(() => {
		fetchCharacterById(id).then(setCharacter);
	}, [setCharacter]);

	if (!character) return null;

	return (
		<>
			<Header />
			<CharacterSection character={character} />
			<ComicsSection comics={character.comics} />
		</>
	);
};

export default CharacterDetailPage;
