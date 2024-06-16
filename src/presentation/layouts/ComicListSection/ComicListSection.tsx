import React from 'react';
import * as styles from './ComicListSection.module.css';

interface ComicListSectionProps {
	children: React.ReactNode;
}

const ComicListSection: React.FC<ComicListSectionProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.comicListSection}>
				<h2 className={styles.header}>COMICS</h2>
				<div className={styles.comicListContainer}>{children}</div>
			</div>
		</div>
	);
};

export default ComicListSection;
