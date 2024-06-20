import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { useFavorites, useLoading } from '@context';

jest.mock('@context', () => ({
	useFavorites: jest.fn(),
	useLoading: jest.fn(),
}));

jest.mock('@components', () => ({
	...jest.requireActual('@components'),
	ProgressBar: jest.fn(() => <div>ProgressBar</div>),
}));

describe('Header', () => {
	const mockUseFavorites = {
		favoritesCount: 5,
	};

	beforeEach(() => {
		(useFavorites as jest.Mock).mockReturnValue(mockUseFavorites);
		(useLoading as jest.Mock).mockReturnValue(true);
	});

	it('renders the logo', () => {
		render(
			<Router>
				<Header />
			</Router>,
		);

		expect(screen.getByAltText('Marvel logo')).toBeInTheDocument();
	});

	it('displays the correct favorites count', () => {
		render(
			<Router>
				<Header />
			</Router>,
		);

		expect(
			screen.getByText(mockUseFavorites.favoritesCount),
		).toBeInTheDocument();
	});

	it('displays the ProgressBar component', () => {
		render(
			<Router>
				<Header />
			</Router>,
		);

		expect(screen.getByText('ProgressBar')).toBeInTheDocument();
	});

	it('shows the heart as filled when character is a favorite', () => {
		render(
			<Router>
				<Header />
			</Router>,
		);

		const heartSvgPath = screen.getByRole('link', {
			name: `${mockUseFavorites.favoritesCount}`,
		}).firstChild.firstChild;
		expect(heartSvgPath).toHaveAttribute('fill', '#EC1D24');
	});
});
