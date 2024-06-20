import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharacterDetail from '../CharacterDetail';
import { fetchCharacterById } from '@infrastructure/api';
import { useLoading } from '@context';
import { mockCharacter } from '@utils/mock-data';
import { Character, Comic } from '@utils/types';

jest.mock('@infrastructure/api');
jest.mock('@context', () => ({
	useLoading: jest.fn(),
}));
jest.mock('@components', () => ({
	Header: () => <div>Header</div>,
	CharacterInfo: ({ character }: { character: Character }) => (
		<div>{character.name}</div>
	),
	ComicList: ({ comics }: { comics: Comic[] }) => (
		<div>{comics[0].title}</div>
	),
}));

describe('CharacterDetailPage', () => {
	const mockSetIsLoading = jest.fn();

	beforeEach(() => {
		(useLoading as jest.Mock).mockReturnValue({
			setIsLoading: mockSetIsLoading,
		});
		(fetchCharacterById as jest.Mock).mockResolvedValue(mockCharacter);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders Header, CharacterInfo, and ComicList components', async () => {
		(fetchCharacterById as jest.Mock).mockResolvedValue(mockCharacter);
		render(
			<MemoryRouter initialEntries={['/character/1']}>
				<Routes>
					<Route
						path="/character/:id"
						element={<CharacterDetail />}
					/>
				</Routes>
			</MemoryRouter>,
		);
		expect(screen.getByText('Header')).toBeInTheDocument();
		await waitFor(() =>
			expect(screen.getByText('Character Name')).toBeInTheDocument(),
		);
		expect(screen.getByText('Comic 1')).toBeInTheDocument();
	});

	it('calls setIsLoading and fetchCharacterById with correct id', async () => {
		render(
			<MemoryRouter initialEntries={['/character/1']}>
				<Routes>
					<Route
						path="/character/:id"
						element={<CharacterDetail />}
					/>
				</Routes>
			</MemoryRouter>,
		);

		expect(mockSetIsLoading).toHaveBeenCalledWith(true);
		await waitFor(() => {
			expect(fetchCharacterById).toHaveBeenCalledWith('1');
			expect(mockSetIsLoading).toHaveBeenCalledWith(false);
		});
	});
});
