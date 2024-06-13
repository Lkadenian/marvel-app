import React from 'react';
import * as styles from './CharacterCard.module.css';
import Heart from '../Heart/Heart';

interface CharacterCardProps {
	key: 'string';
	character: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	return (
		<div className={styles.card}>
			<a>
				<img src={character.thumbnail} alt={character.name} />
			</a>
			<div className={styles.cardContent}>
				<div className={styles.cardNameWrapper}>
					<h2 className={styles.cardName}>{character.name}</h2>
					<Heart small />
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
