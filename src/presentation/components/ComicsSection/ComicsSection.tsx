import React from 'react';
import { Comic } from '../../utils/types';
import * as styles from './ComicsSection.module.css';

interface ComicsSectionProps {
	comics: Comic[];
}

const ComicsSection: React.FC<ComicsSectionProps> = ({ comics }) => {
	return (
		<div className={styles.container}>
			<div className={styles.comicsSection}>
				<h2 className={styles.header}>Comics</h2>
				<div className={styles.comicsContainer}>
					{comics.map((comic) => (
						<div className={styles.comic}>
							<img src={comic.thumbnail} alt={comic.title} />
							<div>
								<p className={styles.title}>{comic.title}</p>
								<span className={styles.year}>
									{comic.year}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ComicsSection;
