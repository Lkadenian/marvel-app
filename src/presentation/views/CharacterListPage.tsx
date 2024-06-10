import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../infrastructure/api';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';

const CharacterListPage: React.FC = () => {
	const [characters, setCharacters] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchCharacters();
			console.log(result);
			setCharacters(result.data.results);
		};

		fetchData();
	}, []);
	console.log(characters);
	return (
		<div>
			<Header />
			<CharacterList characters={characters} />
		</div>
	);
};

export default CharacterListPage;
