import React, { useState } from 'react';
import * as styles from './Searchbar.module.css';

interface SearchBarProps {
	results: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ results }) => {
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
			<div className={styles.results}>{results} results</div>
		</div>
	);
};

export default SearchBar;
