import React from 'react';
import { Comic } from '../../utils/types';
import * as styles from './ComicList.module.css';

interface ComicListProps {
	comics: Comic[];
}

const ComicList: React.FC<ComicListProps> = ({ comics }) => {
	return (
		<>
			{comics.map((comic) => (
				<div className={styles.comic}>
					<img src={comic.thumbnail} alt={comic.title} />
					<div>
						<p className={styles.title}>{comic.title}</p>
						<span className={styles.year}>{comic.year}</span>
					</div>
				</div>
			))}
		</>
	);
};

export default ComicList;
