import React from 'react';
import Header from '../../components/Header/Header';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

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
