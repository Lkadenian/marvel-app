import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from './Searchbar.module.css';

interface SearchBarProps {
	resultCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ resultCount }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const [, setSearchParams] = useSearchParams();

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
		setSearchParams({ search: value });
		navigate(value ? `?search=${value}` : '');
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
			<div className={styles.results}>{resultCount} results</div>
		</div>
	);
};

export default SearchBar;
