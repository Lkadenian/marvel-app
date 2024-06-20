import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicList from './ComicList';
import { mockComicList } from '@utils/mock-data';

describe('ComicList', () => {
	it('renders a list of comics', () => {
		render(<ComicList comics={mockComicList} />);

		mockComicList.forEach((comic) => {
			expect(screen.getByAltText(comic.title)).toBeInTheDocument();
			expect(screen.getByText(comic.title)).toBeInTheDocument();
			expect(screen.getByText(comic.year)).toBeInTheDocument();
		});
	});

	it('renders the correct number of comics', () => {
		render(<ComicList comics={mockComicList} />);

		const comicElements = screen.getAllByRole('img');
		expect(comicElements).toHaveLength(mockComicList.length);
	});
});
