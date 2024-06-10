import React from 'react';
import logo from '../../assets/svg/logo.svg';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	console.log(styles);
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />
			<img src="path/to/icon.png" alt="Icon" />
		</header>
	);
};

export default Header;
