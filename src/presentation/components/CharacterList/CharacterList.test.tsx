import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import { mockCharacterList } from '@utils/mock-data';
import { CharacterCard } from '@components';

jest.mock('@components', () => ({
	CharacterCard: jest.fn(() => <div>CharacterCard</div>),
}));

describe('CharacterList', () => {
	it('renders a list of CharacterCard components', () => {
		render(<CharacterList characters={mockCharacterList} />);

		expect(screen.getAllByText('CharacterCard')).toHaveLength(
			mockCharacterList.length,
		);
	});

	it('passes the correct character props to CharacterCard', () => {
		render(<CharacterList characters={mockCharacterList} />);

		mockCharacterList.forEach((character) => {
			expect(CharacterCard).toHaveBeenCalledWith(
				expect.objectContaining({
					character: character,
				}),
				{},
			);
		});
	});
});
