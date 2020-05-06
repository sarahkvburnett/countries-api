import React, { useState, createContext } from 'react'

export const CountriesContext = createContext()

export const CountriesProvider = props => {
    const [ countries, setCountries ] = useState('countries')
    // const getCountries = () => {
    // }
    // useEffect(getCountries, 0)
    return (
        <div>
            <CountriesContext.Provider value={[countries, setCountries]}>
                {props.children}
            </CountriesContext.Provider>
        </div>
    )
}