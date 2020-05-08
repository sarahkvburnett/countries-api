import React from 'react'
import Country from './Country'
import Pagination from './Pagination'

const CountryList = ({ countries, pagination }) => {
    const { addActiveCountry, currentCountries } = countries
    return (
        <div>
            {
            currentCountries
                .map((country) => {
                    return <Country key={country.name} country={country} addActiveCountry={addActiveCountry}/>
                })
            }
            <Pagination pagination={pagination}/>
        </div>
    )
}

export default CountryList

