import React from 'react'

const Country = ( {country, addActiveCountry} ) => {
    const { name, flag, population, region, capital } = country;
    return (
        <div className="countryItem" onClick={()=>{addActiveCountry(country)}} tabIndex="0">
            <img src={flag} alt="flag"></img>
            <div className="countryInfo">
                <h1>{name}</h1>
                <ul>
                    <li><b>Population:</b> {population}</li>
                    <li><b>Region:</b> {region}</li>
                    <li><b>Capital:</b> {capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default Country
