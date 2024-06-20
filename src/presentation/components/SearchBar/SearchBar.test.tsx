import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useDebounce } from 'use-debounce';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
	useSearchParams: jest.fn(),
	MemoryRouter: jest.requireActual('react-router-dom').MemoryRouter,
}));

jest.mock('use-debounce', () => ({
	useDebounce: jest.fn(),
}));

describe('SearchBar', () => {
	const mockNavigate = jest.fn();
	const mockSearchParams = new URLSearchParams();

	beforeEach(() => {
		(useNavigate as jest.Mock).mockReturnValue(mockNavigate);
		(useSearchParams as jest.Mock).mockReturnValue([mockSearchParams]);
		(useDebounce as jest.Mock).mockImplementation((value) => [value]);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders search input and result count', () => {
		render(
			<MemoryRouter>
				<SearchBar resultCount={10} />
			</MemoryRouter>,
		);

		expect(
			screen.getByPlaceholderText('Search a character...'),
		).toBeInTheDocument();
		expect(screen.getByText('10 results')).toBeInTheDocument();
	});

	it('updates input value on change', () => {
		render(
			<MemoryRouter>
				<SearchBar resultCount={0} />
			</MemoryRouter>,
		);

		const input = screen.getByPlaceholderText('Search a character...');
		fireEvent.change(input, { target: { value: 'Spider-Man' } });

		expect(input).toHaveValue('Spider-Man');
	});

	it('avoids navigatation on mounting', () => {
		render(
			<MemoryRouter>
				<SearchBar resultCount={0} />
			</MemoryRouter>,
		);

		expect(mockNavigate).toHaveBeenCalledTimes(0);
	});

	it('navigates with search query after debounce', () => {
		render(
			<MemoryRouter>
				<SearchBar resultCount={0} />
			</MemoryRouter>,
		);

		const input = screen.getByPlaceholderText('Search a character...');
		fireEvent.change(input, { target: { value: 'Iron Man' } });

		expect(mockNavigate).toHaveBeenCalledWith('?search=Iron Man');
	});

	it('sets initial value from search params', () => {
		mockSearchParams.set('search', 'Hulk');

		render(
			<MemoryRouter>
				<SearchBar resultCount={0} />
			</MemoryRouter>,
		);

		expect(
			screen.getByPlaceholderText('Search a character...'),
		).toHaveValue('Hulk');
	});
});
