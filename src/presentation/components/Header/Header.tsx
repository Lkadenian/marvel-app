import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/svg/logo.svg';
import { Heart, ProgressBar } from '@components';
import { useFavorites, useLoading } from '@context';
import * as styles from './Header.module.css';

const Header: React.FC = () => {
	const { favoritesCount } = useFavorites();
	const { isLoading } = useLoading();

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
			<div className={styles.progressBar}>
				<ProgressBar isLoading={isLoading} />
			</div>
		</header>
	);
};

export default Header;
