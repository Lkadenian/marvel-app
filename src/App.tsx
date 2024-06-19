import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from '@pages/Characters';
import Favorites from '@pages/Favorites';
import CharacterDetail from '@pages/CharacterDetail';
import NotFound from '@pages/NotFound';
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
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
				</LoadingProvider>
			</CharactersProvider>
		</FavoritesProvider>
	);
};

export default App;
