import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CharacterContextType {
	favorites: string[];
	favoritesCount: number;
	isFavorite: (id: string) => boolean;
	toggleFavorite: (id: string) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
	undefined,
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [favorites, setFavorites] = useState<string[]>([]);
	console.log(favorites);

	const favoritesCount = favorites.length;

	const isFavorite = (id: string) => favorites.includes(id);

	const toggleFavorite = (id: string) => {
		isFavorite(id)
			? setFavorites((prev) => prev.filter((item) => item !== id))
			: setFavorites((prev) => [...prev, id]);
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
