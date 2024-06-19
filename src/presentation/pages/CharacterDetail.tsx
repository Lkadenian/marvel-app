import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '@utils/types';
import { fetchCharacterById } from '@infrastructure/api';
import { Header, ComicList, CharacterInfo } from '@components';
import { CharacterSection, ComicListSection } from '@layouts';
import { useLoading } from '@context';

const CharacterDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character>();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);
		fetchCharacterById(id)
			.then(setCharacter)
			.then(() => setIsLoading(false));
	}, []);

	return (
		<>
			<Header />
			<CharacterSection>
				{character && <CharacterInfo character={character} />}
			</CharacterSection>
			<ComicListSection>
				{character && <ComicList comics={character.comics} />}
			</ComicListSection>
		</>
	);
};

export default CharacterDetailPage;
