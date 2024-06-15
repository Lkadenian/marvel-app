import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CharacterContextType {
	favorites: string[];
	//addFavorite: (character: Character) => void;
	//removeFavorite: (character: Character) => void;
	setFavorites: (favorites: string[]) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
	undefined,
);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [favorites, setFavorites] = useState<string[]>([]);

	/*const addFavorite = (character: Character) => {
		//setFavorites();
	};

	const removeFavorite = (character: Character) => {
		//setFavorites();
	};
*/
	return (
		<CharacterContext.Provider value={{ favorites, setFavorites }}>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacters = () => {
	const context = useContext(CharacterContext);
	if (context === undefined) {
		throw new Error(
			'useCharacters must be used within a CharacterProvider',
		);
	}
	return context;
};
