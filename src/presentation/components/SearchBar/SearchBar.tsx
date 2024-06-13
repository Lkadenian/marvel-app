import React, { useState } from 'react';
import * as styles from './Searchbar.module.css';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};
	return (
		<div className={styles.searchBar}>
			<div className={styles.inputWrapper}>
				<input
					className={styles.searchInput}
					type="search"
					placeholder="Search a character..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</div>
			<div className={styles.results}>xxx</div>
		</div>
	);
};

export default SearchBar;
