import React, { useState, useEffect } from "react";
import "./styles/app.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail.js";
import Pagination from "./components/Pagination";

export default function App() {
	const [countryList, setCountryList] = useState([]);
	const [activeCountry, setActiveCountry] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [currentCountries, setCurrentCountries] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [isSearchValid, setIsSearchValid] = useState(true);

	const countriesPerPage = 10;

	const getCountries = () => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((response) => response.json())
			.then((data) => setCountries(data));
	};

	const setCountries = (countries) => {
		setCountryList(countries);
		setCurrentCountries(countries.filter((e, i) => i < countriesPerPage));
	};

	const pagination = {
		countriesPerPage,
		totalCountries: countryList.length,
		paginate: function (pageNumber) {
			setCurrentPage(pageNumber);
			const indexOfLastCountry = pageNumber * countriesPerPage;
			const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
			setCurrentCountries(() =>
				countryList.slice(indexOfFirstCountry, indexOfLastCountry)
			);
		},
	};

	const countries = {
		currentCountries,
		activeCountry,
		addActiveCountry: function (country) {
			setActiveCountry(country);
		},
		removeActiveCountry: function () {
			setActiveCountry("");
		},
	};

	const search = {
		searchInput,
		isSearchValid,
		inputCountry: function (e) {
			setIsSearchValid(true);
			setSearchInput(e.target.value);
		},
		findCountry: function (e) {
			e.preventDefault();
			const country = countryList.filter(
				(country) => country.name.toLowerCase() === searchInput.toLowerCase()
			);
			if (country[0]) setActiveCountry(country[0]);
			else setIsSearchValid(false);
		},
	};

	useEffect(getCountries, []);

	return (
		<div>
			<Nav />
			{!activeCountry && (
				<>
					<Search search={search} />
					<CountryList countries={countries} />
					<Pagination pagination={pagination} />
				</>
			)}
			{activeCountry && <CountryDetail countries={countries} />}
		</div>
	);
}
