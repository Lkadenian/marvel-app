import React from 'react';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import useCharacterSearch from '../hooks/useCharacterSearch';

const Characters: React.FC = () => {
	const { characters, searchQuery } = useCharacterSearch(600);

	return (
		<>
			<Header />
			<ContentWrapper>
				{characters && (
					<>
						<SearchBar
							resultCount={characters.length}
							value={searchQuery}
						/>
						<CharacterList characters={characters} />
					</>
				)}
			</ContentWrapper>
		</>
	);
};

export default Characters;
