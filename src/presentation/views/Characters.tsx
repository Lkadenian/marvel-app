import React, { useEffect } from 'react';
import { fetchCharacters } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import { useCharacters } from '../../context/characters';

const Characters: React.FC = () => {
	const { initialCharacterList: characters, setInitialCharacterList } =
		useCharacters();

	useEffect(() => {
		!characters.length && fetchCharacters().then(setInitialCharacterList);
	}, []);

	return (
		<>
			<Header />
			<ContentWrapper>
				{characters && (
					<>
						<SearchBar resultCount={characters.length} />
						<CharacterList characters={characters} />
					</>
				)}
			</ContentWrapper>
		</>
	);
};

export default Characters;
