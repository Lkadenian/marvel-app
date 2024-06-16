import React from 'react';
import logo from '../../assets/svg/logo.svg';
import Heart from '../Heart/Heart';
import { useFavorites } from '../../../context/favorites';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	const { favoritesCount } = useFavorites();

	return (
		<header className={styles.header}>
			<a href="/">
				<img src={logo} alt="Logo" />
			</a>
			<div className={styles.favCounter}>
				<Heart isFilled={favoritesCount > 0} />
				{favoritesCount}
			</div>
		</header>
	);
};

export default Header;
