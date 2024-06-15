import React from 'react';
import { Character } from '../../utils/types';
import * as styles from './CharacterSection.module.css';
import Heart from '../Heart/Heart';

interface CharacterCardProps {
	character: Character;
}

const CharacterSection: React.FC<CharacterCardProps> = ({ character }) => {
	const { name, description, thumbnail } = character;

	return (
		<div className={styles.container}>
			<div className={styles.characterSection}>
				<img src={thumbnail} alt={name} />
				<div className={styles.info}>
					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{name}</h1>
						<Heart />
					</div>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterSection;
