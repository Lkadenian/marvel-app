import React from 'react';
import logo from '../../assets/svg/logo.svg';
import Heart from '../Heart/Heart';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />
			<div className={styles.favCounter}>
				<Heart />0
			</div>
		</header>
	);
};

export default Header;
