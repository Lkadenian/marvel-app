import React from 'react';
import logo from '../../assets/svg/logo.svg';
import xxx from './Header.module.css';

const Header: React.FC = () => {
	console.log(xxx);
	return (
		<header className={xxx.xxx}>
			<img src={logo} alt="Logo" />
			<img src="path/to/icon.png" alt="Icon" />
		</header>
	);
};

export default Header;
