import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterListPage from './presentation/views/CharacterListPage';
import CharacterDetail from './presentation/views/CharacterDetail';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<Router>
		<Routes>
			<Route path="/" element={<CharacterListPage />} />
			<Route
				path="/character/:characterId"
				element={<CharacterDetail />}
			/>
		</Routes>
	</Router>,
);
