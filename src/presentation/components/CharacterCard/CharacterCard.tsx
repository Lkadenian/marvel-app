import React from 'react';
import { Heart } from '@components';
import { Character } from '@domain';
import { useFavorites } from '@context';
import { Link } from 'react-router-dom';
import * as styles from './CharacterCard.module.css';

interface CharacterCardProps {
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, thumbnail } = character;
	const { isFavorite, toggleFavorite } = useFavorites();

	const isThisFavorite = isFavorite(id);
	const handleClick = () => toggleFavorite(character);

	return (
		<div className={styles.card}>
			<Link to={`/character/${id}`}>
				<img src={thumbnail} alt={name} />
			</Link>
			<div className={styles.content}>
				<div className={styles.nameWrapper}>
					<h2 className={styles.name}>{name}</h2>
					<button
						onClick={handleClick}
						className={styles.heartWrapper}
						aria-pressed={isThisFavorite}
					>
						<Heart isFilled={isThisFavorite} small />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
