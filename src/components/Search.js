import React from "react";
import { ExclaimIcon, SearchIcon } from "./Icons";

const Search = ({ search }) => {
	const { searchInput, isSearchValid, findCountry, inputCountry } = search;
	return (
		<div
			className={isSearchValid ? "searchBar " : "searchBar searchInvalid"}
			tabIndex="0"
		>
			<form onSubmit={findCountry}>
				<label htmlFor="search">Search</label>
				<SearchIcon />
				<input
					name="search"
					placeholder="Search for a country..."
					value={searchInput}
					onChange={inputCountry}
				/>
			</form>
			{!isSearchValid && (
				<p>
					<ExclaimIcon /> <b>Country not found</b>
				</p>
			)}
		</div>
	);
};

export default Search;
