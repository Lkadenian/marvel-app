import React from 'react';
import * as styles from './ProgressBar.module.css';

interface ProgressBarProps {
	isLoading: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
	return (
		<div className={styles.progressBarWrapper}>
			{isLoading && <div className={styles.progressBar} />}
		</div>
	);
};

export default ProgressBar;
