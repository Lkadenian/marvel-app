import React, { useEffect } from 'react';
import { useCharacters } from '../../context/context';
import { fetchCharacters } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';

const CharacterListPage: React.FC = () => {
	const { characters, setCharacters } = useCharacters();

	useEffect(() => {
		fetchCharacters().then(setCharacters);
	}, [setCharacters]);

	return (
		<>
			<Header />
			<ContentWrapper>
				<SearchBar results={characters.length} />
				{characters && <CharacterList characters={characters} />}
			</ContentWrapper>
		</>
	);
};

export default CharacterListPage;
