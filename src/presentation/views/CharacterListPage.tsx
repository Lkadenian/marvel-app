import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import { Character } from '../utils/types';
import { cardImage } from '../../infrastructure/constants';

const CharacterListPage: React.FC = () => {
	const [characters, setCharacters] = useState<Character[]>();

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchCharacters();
			setCharacters(
				result.data.results.map((result) => ({
					name: result.name,
					thumbnail: `${result.thumbnail.path}/${cardImage}.${result.thumbnail.extension}`,
					isLiked: false,
				})),
			);
		};

		fetchData();
	}, []);

	if (!characters || characters.length === 0) {
		return null;
	}
	return (
		<>
			<Header />
			<ContentWrapper>
				<SearchBar />
				<CharacterList characters={characters} />
			</ContentWrapper>
		</>
	);
};

export default CharacterListPage;
