import React from 'react';
import logo from '../../assets/svg/logo.svg';
import Heart from '../Heart/Heart';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../../context/favorites';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	const { favoritesCount } = useFavorites();

	return (
		<header className={styles.header}>
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<div>
				<Link to="/favorites" className={styles.favCounter}>
					<Heart isFilled={favoritesCount > 0} />
					{favoritesCount}
				</Link>
			</div>
		</header>
	);
};

export default Header;
