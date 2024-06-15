import React from 'react';
import Heart from '../Heart/Heart';
import { Character } from '../../utils/types';
import * as styles from './CharacterCard.module.css';

interface CharacterCardProps {
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, thumbnail } = character;

	return (
		<div className={styles.card}>
			<a href={`/character/${id}`}>
				<img src={thumbnail} alt={name} />
			</a>
			<div className={styles.content}>
				<div className={styles.nameWrapper}>
					<h2 className={styles.name}>{name}</h2>
					<span className={styles.heartWrapper}>
						<Heart small />
					</span>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
