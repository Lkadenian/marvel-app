import React, { useEffect } from 'react';
import { fetchCharacters } from '../infrastructure/api';

const Home: React.FC = () => {
	useEffect(() => {
		console.log(fetchCharacters());
	}, []);

	return (
		<div>
			<header>
				<h1>Marvel Characters</h1>
			</header>
		</div>
	);
};

export default Home;
