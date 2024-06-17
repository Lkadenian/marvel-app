import React from 'react';
import { Header, ContentWrapper } from '@components';

interface CharacterListSectionProps {
	children: React.ReactNode;
}

const CharacterListSection: React.FC<CharacterListSectionProps> = ({
	children,
}) => {
	return (
		<>
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
		</>
	);
};

export default CharacterListSection;
