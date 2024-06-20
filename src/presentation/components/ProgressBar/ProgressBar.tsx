import React from 'react';
import * as styles from './ProgressBar.module.css';

interface ProgressBarProps {
	isLoading: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
	if (!isLoading) {
		return null;
	}

	return (
		<div className={styles.progressBarWrapper}>
			<div className={styles.progressBar} />
		</div>
	);
};

export default ProgressBar;
