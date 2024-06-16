import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import ComicList from '../components/ComicList/ComicList';
import CharacterInfo from '../components/CharacterInfo/CharacterInfo';
import { Character } from '../utils/types';
import CharacterSection from '../layouts/CharacterSection/CharacterSection';
import ComicListSection from '../layouts/ComicListSection/ComicListSection';

const CharacterDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character>();

	useEffect(() => {
		fetchCharacterById(id).then(setCharacter);
	}, [setCharacter]);

	return (
		<>
			<Header />
			<>
				<CharacterSection>
					{character && <CharacterInfo character={character} />}
				</CharacterSection>
				<ComicListSection>
					{character && <ComicList comics={character.comics} />}
				</ComicListSection>
			</>
		</>
	);
};

export default CharacterDetailPage;
