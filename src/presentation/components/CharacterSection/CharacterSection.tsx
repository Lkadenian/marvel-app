import React from 'react';
import { Character } from '../../utils/types';
import Heart from '../Heart/Heart';
import { useFavorites } from '../../../context/favorites';
import * as styles from './CharacterSection.module.css';

interface CharacterSectionProps {
	character: Character;
}

const CharacterSection: React.FC<CharacterSectionProps> = ({ character }) => {
	const { id, name, description, thumbnail } = character;
	const { isFavorite, toggleFavorite } = useFavorites();

	const handleClick = () => toggleFavorite(id);

	return (
		<div className={styles.container}>
			<div className={styles.characterSection}>
				<img src={thumbnail} alt={name} />
				<div className={styles.info}>
					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{name}</h1>
						<a
							className={styles.heartWrapper}
							onClick={handleClick}
						>
							<Heart isFilled={isFavorite(id)} />
						</a>
					</div>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterSection;
