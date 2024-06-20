import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
	it('renders the progress bar when isLoading is true', () => {
		render(<ProgressBar isLoading={true} />);

		expect(screen.getAllByRole('generic')).toHaveLength(3);
	});

	it('does not render the progress bar when isLoading is false', () => {
		render(<ProgressBar isLoading={false} />);

		expect(screen.getAllByRole('generic')).toHaveLength(1);
	});
});
