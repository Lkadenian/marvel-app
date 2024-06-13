import React, { useEffect } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Character } from '../../utils/types';
import * as styles from './CharacterList.module.css';

interface CharacterListProps {
	characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
	return (
		<div className={styles.listWrapper}>
			{characters.map((character: any) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	);
};

export default CharacterList;
