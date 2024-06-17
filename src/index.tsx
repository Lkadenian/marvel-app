import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './presentation/pages/Characters';
import Favorites from './presentation/pages/Favorites';
import CharacterDetail from './presentation/pages/CharacterDetail';
import { FavoritesProvider } from './context/favorites';
import { CharactersProvider } from './context/characters';
import './presentation/globals/global.module.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<FavoritesProvider>
		<CharactersProvider>
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
		</CharactersProvider>
	</FavoritesProvider>,
);
