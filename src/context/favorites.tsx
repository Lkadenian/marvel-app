import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Character } from '@utils/types';

interface CharacterContextType {
	favorites: Character[];
	favoritesCount: number;
	isFavorite: (id: string) => boolean;
	toggleFavorite: (character: Character) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
	undefined,
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [favorites, setFavorites] = useState<Character[]>([]);

	const favoritesCount = favorites.length;

	const isFavorite = (id: string) =>
		favorites.some((character) => character.id === id);

	const toggleFavorite = (character: Character) => {
		isFavorite(character.id)
			? setFavorites((prev) =>
					prev.filter((item) => item.id !== character.id),
				)
			: setFavorites((prev) => [
					...prev,
					{ ...character, comics: undefined },
				]);
	};

	return (
		<CharacterContext.Provider
			value={{ favorites, toggleFavorite, favoritesCount, isFavorite }}
		>
			{children}
		</CharacterContext.Provider>
	);
};

export const useFavorites = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error(
			'useCharacters must be used within a CharacterProvider',
		);
	}
	return context;
};
