import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterListPage from './presentation/views/CharacterListPage';
import CharacterDetail from './presentation/views/CharacterDetail';
import './presentation/globals/global.module.css';
import { CharacterProvider } from './context/context';

const root = createRoot(document.getElementById('root'));

root.render(
	<CharacterProvider>
		<Router>
			<Routes>
				<Route path="/" element={<CharacterListPage />} />
				<Route path="/character/:id" element={<CharacterDetail />} />
			</Routes>
		</Router>
	</CharacterProvider>,
);
