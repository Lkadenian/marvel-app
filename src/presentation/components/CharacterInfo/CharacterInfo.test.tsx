import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterInfo from './CharacterInfo';
import { useFavorites } from '@context';
import { mockCharacter } from '@utils/mock-data';

jest.mock('@context', () => ({
	useFavorites: jest.fn(),
}));

describe('CharacterInfo', () => {
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

	it('renders character information correctly', () => {
		isFavorite.mockReturnValue(false);

		render(<CharacterInfo character={mockCharacter} />);

		expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
		expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
		expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
	});

	it('calls toggleFavorite when the heart button is clicked', () => {
		isFavorite.mockReturnValue(false);

		render(<CharacterInfo character={mockCharacter} />);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(toggleFavorite).toHaveBeenCalledWith(mockCharacter);
	});

	it('shows the heart as filled when character is a favorite', () => {
		isFavorite.mockReturnValue(true);

		render(<CharacterInfo character={mockCharacter} />);

		const heartSvgPath = screen.getByRole('button').firstChild.firstChild;
		expect(heartSvgPath).toHaveAttribute('fill', '#EC1D24');
	});

	it('has the appropiate accesibility attribute', () => {
		isFavorite.mockReturnValue(true);
		render(<CharacterInfo character={mockCharacter} />);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-pressed',
			'true',
		);
	});
});
