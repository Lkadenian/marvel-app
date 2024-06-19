import React from 'react';
import { ContentWrapper } from '@components';

interface CharacterListSectionProps {
	children: React.ReactNode;
}

const CharacterListSection: React.FC<CharacterListSectionProps> = ({
	children,
}) => {
	return <ContentWrapper>{children}</ContentWrapper>;
};

export default CharacterListSection;
