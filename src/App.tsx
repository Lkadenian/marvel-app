import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './presentation/pages/Characters';
import Favorites from './presentation/pages/Favorites';
import CharacterDetail from './presentation/pages/CharacterDetail';
import {
	FavoritesProvider,
	CharactersProvider,
	LoadingProvider,
} from '@context';

import './presentation/globals/global.module.css';

const App = () => {
	return (
		<FavoritesProvider>
			<CharactersProvider>
				<LoadingProvider>
					<Router>
						<Routes>
							<Route path="/" element={<Characters />} />
							<Route
								path="/character/:id"
								element={<CharacterDetail />}
							/>
							<Route path="/favorites" element={<Favorites />} />
						</Routes>
					</Router>
				</LoadingProvider>
			</CharactersProvider>
		</FavoritesProvider>
	);
};

export default App;
