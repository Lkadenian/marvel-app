import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from './Searchbar.module.css';
import { useDebounce } from 'use-debounce';
import searchIcon from '@assets/svg/search.svg';

interface SearchBarProps {
	resultCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ resultCount }) => {
	const [searchParams] = useSearchParams();
	const searchText = searchParams.get('search') || '';
	const [value, setValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();
	const isInitialMount = useRef(true);
	const [debouncedValue] = useDebounce(searchValue, 600);
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setValue(value);
		setSearchValue(value);
	};

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}
		navigate(debouncedValue ? `?search=${debouncedValue}` : '');
	}, [debouncedValue]);

	useEffect(() => {
		setValue(searchText);
	}, [searchText]);

	return (
		<div className={styles.searchBar}>
			<div className={styles.inputWrapper}>
				<img src={searchIcon} alt="search" />
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Search a character..."
					onChange={handleSearchChange}
					value={value}
				/>
			</div>
			<div className={styles.results}>{resultCount} results</div>
		</div>
	);
};

export default SearchBar;
