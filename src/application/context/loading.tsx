import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useCallback,
} from 'react';

interface LoadingContextType {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
	undefined,
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const setIsLoadingDelayed = useCallback((value: boolean) => {
		setTimeout(() => {
			setIsLoading(value);
		}, 800);
	}, []);

	return (
		<LoadingContext.Provider
			value={{ isLoading, setIsLoading: setIsLoadingDelayed }}
		>
			{children}
		</LoadingContext.Provider>
	);
};

export const useLoading = () => {
	const context = useContext(LoadingContext);
	if (!context) {
		throw new Error('useLoading must be used within a LoadingProvider');
	}
	return context;
};
