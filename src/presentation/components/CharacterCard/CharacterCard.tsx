import React from 'react';
import { Heart } from '@components';
import { Character } from '@utils/types';
import { useFavorites } from '@context/favorites';
import { Link } from 'react-router-dom';
import * as styles from './CharacterCard.module.css';

interface CharacterCardProps {
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, thumbnail } = character;
	const { isFavorite, toggleFavorite } = useFavorites();

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
					>
						<Heart isFilled={isFavorite(id)} small />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
