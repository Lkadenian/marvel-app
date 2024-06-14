import React from 'react';
import * as styles from './CharacterCard.module.css';
import Heart from '../Heart/Heart';
import { Character } from '../../utils/types';

interface CharacterCardProps {
	key: 'string';
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	return (
		<div className={styles.card}>
			<a href={`/character/${character.id}`}>
				<img src={character.thumbnail} alt={character.name} />
			</a>
			<div className={styles.cardContent}>
				<div className={styles.cardNameWrapper}>
					<h2 className={styles.cardName}>{character.name}</h2>
					<span className={styles.heartWrapper}>
						<Heart small />
					</span>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
