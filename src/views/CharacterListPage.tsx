import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../infrastructure/api';
import CharacterList from '../components/CharacterList';

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
			<header>
				<h1>Marvel Characters</h1>
			</header>
			<CharacterList characters={characters} />
		</div>
	);
};

export default CharacterListPage;
