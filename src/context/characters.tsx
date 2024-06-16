import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Character } from '../presentation/utils/types';

interface CharacterContextType {
	initialCharacterList: Character[];
	setInitialCharacterList: (characterList: Character[]) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
	undefined,
);

export const CharactersProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [initialCharacterList, setInitialCharacterList] = useState<
		Character[]
	>([]);

	return (
		<CharacterContext.Provider
			value={{
				initialCharacterList,
				setInitialCharacterList,
			}}
		>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacters = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error(
			'useCharacters must be used within a CharacterProvider',
		);
	}
	return context;
};
