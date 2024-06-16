import React from 'react';
import { Comic } from '../../utils/types';
import * as styles from './ComicListSection.module.css';

interface ComicListSectionProps {
	comics: Comic[];
}

const ComicListSection: React.FC<ComicListSectionProps> = ({ comics }) => {
	return (
		<div className={styles.container}>
			<div className={styles.comicListSection}>
				<h2 className={styles.header}>comicList</h2>
				<div className={styles.comicListContainer}>
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

export default ComicListSection;
