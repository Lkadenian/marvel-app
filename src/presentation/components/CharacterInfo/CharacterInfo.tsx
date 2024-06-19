import React from 'react';
import { Character } from '@utils/types';
import { Heart } from '@components';
import { useFavorites } from '@context';
import * as styles from './CharacterInfo.module.css';

interface CharacterInfoProps {
	character: Character;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
	const { id, name, description, thumbnail } = character;
	const { isFavorite, toggleFavorite } = useFavorites();

	const handleClick = () => toggleFavorite(character);

	return (
		<>
			<img src={thumbnail} alt={name} />
			<div className={styles.info}>
				<div className={styles.nameWrapper}>
					<h1 className={styles.name}>{name}</h1>
					<button
						className={styles.heartWrapper}
						onClick={handleClick}
						aria-pressed={isFavorite(id)}
					>
						<Heart isFilled={isFavorite(id)} />
					</button>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</>
	);
};

export default CharacterInfo;
