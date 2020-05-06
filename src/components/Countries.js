import React, {useContext} from 'react'
import { CountriesContext } from '../CountriesContext'

export const Countries = () => {
    const [ countries ] = useContext(CountriesContext)
    return (
        <div>
            <h1>{countries}</h1>
        </div>
    )
}

