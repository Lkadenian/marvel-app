import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Character } from '../presentation/utils/types';

interface CharacterContextType {
	characters: Character[];
	//addFavorite: (character: Character) => void;
	//removeFavorite: (character: Character) => void;
	setCharacters: (character: Character[]) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
	undefined,
);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [characters, setCharacters] = useState<Character[]>([]);

	/*const addFavorite = (character: Character) => {
		//setFavorites();
	};

	const removeFavorite = (character: Character) => {
		//setFavorites();
	};
*/
	return (
		<CharacterContext.Provider value={{ characters, setCharacters }}>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacters = () => {
	console.log('useCharacters');
	const context = useContext(CharacterContext);
	if (context === undefined) {
		throw new Error(
			'useCharacters must be used within a CharacterProvider',
		);
	}
	return context;
};
