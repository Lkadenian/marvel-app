import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import { Character } from '../utils/types';

const CharacterListPage: React.FC = () => {
	const [characters, setCharacters] = useState<Character[]>();

	useEffect(() => {
		fetchCharacters().then(setCharacters);
	}, [setCharacters]);

	return (
		<>
			<Header />
			<ContentWrapper>
				{characters && (
					<>
						<SearchBar results={characters.length} />
						<CharacterList characters={characters} />
					</>
				)}
			</ContentWrapper>
		</>
	);
};

export default CharacterListPage;
