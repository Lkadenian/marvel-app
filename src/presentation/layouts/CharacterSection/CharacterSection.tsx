import React from 'react';
import * as styles from './CharacterSection.module.css';

interface CharacteSectionProps {
	children: React.ReactNode;
}

const CharacteSection: React.FC<CharacteSectionProps> = ({ children }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.characterSection}>{children}</div>
			</div>
		</>
	);
};

export default CharacteSection;
