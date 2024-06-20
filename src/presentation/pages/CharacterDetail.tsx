import React from 'react';
import useFetchCharacterDetail from '@hooks/useFetchCharacterDetail';
import { Header, ComicList, CharacterInfo } from '@components';
import { CharacterSection, ComicListSection } from '@layouts';

const CharacterDetail: React.FC = () => {
	const character = useFetchCharacterDetail();

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

export default CharacterDetail;
