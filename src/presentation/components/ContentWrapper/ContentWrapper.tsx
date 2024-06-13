import React from 'react';
import * as styles from './ContentWrapper.module.css';

interface WrapperComponentProps {
	children: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children }) => {
	return <div className={styles.contentWrapper}>{children}</div>;
};

export default WrapperComponent;
