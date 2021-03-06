import React from "react";
import { BackIcon } from "./Icons";

const CountryDetail = ({ countries }) => {
	const { activeCountry, removeActiveCountry } = countries;
	const {
		name,
		flag,
		population,
		nativeName,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borders,
	} = activeCountry;
	return (
		<div className="countryDetails">
			<button type="button" onClick={removeActiveCountry} className="backBtn">
				<BackIcon />
				<span>Back</span>
			</button>
			<div className="countryDetailItem">
				<img src={flag} alt="flag"></img>
				<div className="countryDetailText">
					<div className="countryDetailInfo">
						<h1>{name}</h1>
						<ul className="location">
							<li>
								<b>Native Name:</b> {nativeName}
							</li>
							<li>
								<b>Population:</b> {population}
							</li>
							<li>
								<b>Region:</b> {region}{" "}
							</li>
							<li>
								<b>Sub Region:</b> {subregion}
							</li>
							<li>
								<b>Capital:</b> {capital}{" "}
							</li>
						</ul>
						<ul className="details">
							<li>
								<b>Top Level Domain:</b>{" "}
								{topLevelDomain.map((domain) => domain)}
							</li>
							<li>
								<b>Currencies:</b> {currencies.map((currency) => currency.name)}
							</li>
							<li>
								<b>Languages:</b>{" "}
								{languages.map((lang, index) => {
									return index === languages.length-1
										? lang.name
										: lang.name + ", ";
								})}
							</li>
						</ul>
						<div className="borderCountries">
							<h2>Border Countries</h2>
							<p className="borders">
								{borders.length === 0
									? "None"
									: borders.map((border) => {
											return <div key={border}>{border}</div>;
									  })}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
