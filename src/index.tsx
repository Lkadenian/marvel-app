import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import CharacterDetail from './views/CharacterDetail';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/character/:characterId"
				element={<CharacterDetail />}
			/>
		</Routes>
	</Router>,
);
