import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useFavorites } from '@context';
import CharacterCard from './CharacterCard';
import { mockCharacter } from '@utils/mock-data';

jest.mock('@context', () => ({
	useFavorites: jest.fn(),
}));

describe('CharacterCard', () => {
	let toggleFavorite: jest.Mock;
	let isFavorite: jest.Mock;

	beforeEach(() => {
		toggleFavorite = jest.fn();
		isFavorite = jest.fn().mockReturnValue(false);
		(useFavorites as jest.Mock).mockReturnValue({
			isFavorite,
			toggleFavorite,
		});
	});

	it('renders character details correctly', () => {
		render(
			<Router>
				<CharacterCard character={mockCharacter} />
			</Router>,
		);

		expect(screen.getByRole('img')).toHaveProperty(
			'src',
			`http://localhost/${mockCharacter.thumbnail}`,
		);
		expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-pressed',
			'false',
		);
	});

	it('navigates to character detail page on link click', () => {
		render(
			<Router>
				<CharacterCard character={mockCharacter} />
			</Router>,
		);

		expect(screen.getByRole('link')).toHaveAttribute(
			'href',
			`/character/${mockCharacter.id}`,
		);
	});

	it('toggles favorite status on button click', () => {
		render(
			<Router>
				<CharacterCard character={mockCharacter} />
			</Router>,
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(toggleFavorite).toHaveBeenCalledWith(mockCharacter);
	});

	it('shows the heart as filled when character is a favorite', () => {
		isFavorite.mockReturnValue(true);

		render(
			<Router>
				<CharacterCard character={mockCharacter} />
			</Router>,
		);

		const heart = screen.getByRole('button').firstChild;
		expect(heart).toHaveAttribute('fill', 'inherited');
	});

	it('has the appropiate accesibility attribute', () => {
		isFavorite.mockReturnValue(true);
		render(
			<Router>
				<CharacterCard character={mockCharacter} />
			</Router>,
		);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-pressed',
			'true',
		);
	});
});
