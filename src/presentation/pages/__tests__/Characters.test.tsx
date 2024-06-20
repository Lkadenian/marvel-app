import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Characters from '../Characters';
import { Character } from '@domain';
import { fetchCharacters } from '@infrastructure/api/api';
import { mockCharacterList } from '@utils/mock-data';
import { useLoading, useCharacters } from '@context';

jest.mock('@context', () => ({
	useCharacters: jest.fn(),
	useLoading: jest.fn(),
}));
jest.mock('@infrastructure/api/api', () => ({
	fetchCharacters: jest.fn(),
}));
jest.mock('@components', () => ({
	...jest.requireActual('@components'),
	Header: () => <div>Header</div>,
	CharacterList: ({ characters }: { characters: Character[] }) => (
		<div>{characters.map((character) => character.name).join(', ')}</div>
	),
	SearchBar: ({ resultCount }: { resultCount: number }) => (
		<div>{resultCount} results</div>
	),
}));

describe('Characters', () => {
	const mockSetIsLoading = jest.fn();
	const mockSetInitialCharacterList = jest.fn();

	beforeEach(() => {
		(fetchCharacters as jest.Mock).mockResolvedValue(mockCharacterList);
		(useLoading as jest.Mock).mockReturnValue({
			setIsLoading: mockSetIsLoading,
		});
		(useCharacters as jest.Mock).mockReturnValue({
			initialCharacterList: [],
			setInitialCharacterList: mockSetInitialCharacterList,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders Header, SearchBar, and CharacterList components', async () => {
		render(
			<MemoryRouter initialEntries={['/characters']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(screen.getByText('Header')).toBeInTheDocument();
			expect(screen.getByText('2 results')).toBeInTheDocument();
			expect(
				screen.getByText('Character Name, Character 2'),
			).toBeInTheDocument();
		});
	});

	it('calls setIsLoading and fetchCharacters', async () => {
		render(
			<MemoryRouter initialEntries={['/characters']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(screen.getByText('Header')).toBeInTheDocument();
			expect(mockSetIsLoading).toHaveBeenCalledWith(true);
			expect(fetchCharacters).toHaveBeenCalledWith('');
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
			expect(mockSetIsLoading).toHaveBeenCalledWith(false);
		});
	});

	it('sets initialCharacterList on first fetching', async () => {
		render(
			<MemoryRouter initialEntries={['/characters']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(mockSetInitialCharacterList).toHaveBeenCalledWith(
				mockCharacterList,
			);
		});
	});

	it('skips fetchCharacters when initialCharacterList is populated', async () => {
		(useCharacters as jest.Mock).mockReturnValue({
			initialCharacterList: mockCharacterList,
			setInitialCharacterList: mockSetInitialCharacterList,
		});

		render(
			<MemoryRouter initialEntries={['/characters']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(mockSetInitialCharacterList).toHaveBeenCalledTimes(0);
			expect(fetchCharacters).toHaveBeenCalledTimes(0);
			expect(screen.getByText('2 results')).toBeInTheDocument();
			expect(
				screen.getByText('Character Name, Character 2'),
			).toBeInTheDocument();
		});
	});

	it('fetches and displays characters based on search query', async () => {
		(useCharacters as jest.Mock).mockReturnValue({
			initialCharacterList: mockCharacterList,
			setInitialCharacterList: mockSetInitialCharacterList,
		});

		render(
			<MemoryRouter initialEntries={['/characters?search=captain']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(mockSetInitialCharacterList).toHaveBeenCalledTimes(0);
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
			expect(fetchCharacters).toHaveBeenCalledWith('captain');
		});
	});

	it('handles empty characters list correctly', async () => {
		(fetchCharacters as jest.Mock).mockResolvedValue([]);

		render(
			<MemoryRouter initialEntries={['/characters']}>
				<Routes>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(screen.getByText('0 results')).toBeInTheDocument();
			expect(
				screen.queryByText('Character Name, Character 2'),
			).not.toBeInTheDocument();
		});
	});
});
