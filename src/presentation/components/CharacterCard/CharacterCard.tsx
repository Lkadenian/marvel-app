import React from 'react';
import Heart from '../Heart/Heart';
import { Character } from '../../utils/types';
import { useFavorites } from '../../../context/favorites';
import * as styles from './CharacterCard.module.css';

interface CharacterCardProps {
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, thumbnail } = character;
	const { isFavorite, toggleFavorite } = useFavorites();

	const handleClick = () => toggleFavorite(id);

	return (
		<div className={styles.card}>
			<a href={`/character/${id}`}>
				<img src={thumbnail} alt={name} />
			</a>
			<div className={styles.content}>
				<div className={styles.nameWrapper}>
					<h2 className={styles.name}>{name}</h2>
					<a onClick={handleClick} className={styles.heartWrapper}>
						<Heart isFilled={isFavorite(id)} small />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
