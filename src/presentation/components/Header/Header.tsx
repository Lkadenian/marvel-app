import React from 'react';
import logo from '../../assets/svg/logo.svg';
import Heart from '../Heart/Heart';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<a href="/">
				<img src={logo} alt="Logo" />
			</a>
			<div className={styles.favCounter}>
				<Heart />
				xxx
			</div>
		</header>
	);
};

export default Header;
