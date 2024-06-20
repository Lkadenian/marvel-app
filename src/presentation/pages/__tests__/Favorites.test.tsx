import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../Favorites';
import { useFavorites } from '@context';
import { Character } from '@utils/types';

jest.mock('@context', () => ({
	useFavorites: jest.fn(),
}));
jest.mock('@components', () => ({
	Header: () => <div>Header</div>,
	CharacterList: ({ characters }: { characters: Character[] }) => (
		<div>{characters.map((character) => character.name).join(', ')}</div>
	),
	SearchBar: ({ resultCount }: { resultCount: number }) => (
		<div>{resultCount} results</div>
	),
}));

describe('Favorites', () => {
	const mockFavorites = [
		{ id: '1', name: 'Spider-Man' },
		{ id: '2', name: 'Iron Man' },
	];

	beforeEach(() => {
		(useFavorites as jest.Mock).mockReturnValue({
			favorites: mockFavorites,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders Header, SearchBar, and CharacterList components', () => {
		render(
			<MemoryRouter initialEntries={['/favorites']}>
				<Routes>
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</MemoryRouter>,
		);

		expect(screen.getByText('Header')).toBeInTheDocument();
		expect(screen.getByText('2 results')).toBeInTheDocument();
		expect(screen.getByText('Spider-Man, Iron Man')).toBeInTheDocument();
	});

	it('filters characters based on search query', () => {
		render(
			<MemoryRouter initialEntries={['/favorites?search=spider']}>
				<Routes>
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</MemoryRouter>,
		);

		expect(screen.getByText('1 results')).toBeInTheDocument();
		expect(screen.getByText('Spider-Man')).toBeInTheDocument();
	});
});
