import React from "react";
import Country from "./Country";

const CountryList = ({ countries }) => {
	const { addActiveCountry, currentCountries } = countries;
	return (
		<div className="countryList">
			{currentCountries.map((country) => {
				return (
					<Country
						key={country.name}
						country={country}
						addActiveCountry={addActiveCountry}
					/>
				);
			})}
		</div>
	);
};

export default CountryList;
