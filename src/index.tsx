import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterListPage from './presentation/views/CharacterListPage';
import CharacterDetail from './presentation/views/CharacterDetail';
import { CharacterProvider } from './context/context';
import './presentation/globals/global.module.css';

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
