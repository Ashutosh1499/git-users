// Search.js

import React, { useState } from 'react';

const Search = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = e => {
		setQuery(e.target.value);
	};

	const handleSearch = e => {
		e.preventDefault();
		onSearch(query);
	};
	return (
		<div className='topBar fb items-center justify-center'>
			<form onSubmit={handleSearch} className=' fb items-center justify-center'>
				<input
					type='text'
					value={query}
					onChange={handleInputChange}
					placeholder='Search'
					className='m-10'
				/>
				<input type='submit' value='Search' onClick={handleSearch} />
			</form>
		</div>
	);
};

export default Search;
