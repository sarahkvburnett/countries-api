import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamation } from '@fortawesome/free-solid-svg-icons'


const Search = ({ search }) => {
    const {searchInput, searchValidity, findCountry, inputCountry} = search
    return (
        <div className={searchValidity === 'invalid' ? 'searchBar searchInvalid' : 'searchBar'} tabIndex="0">
            <form onSubmit={findCountry}>
                <label htmlFor="search">Search</label>
                <FontAwesomeIcon icon={faSearch}/>
                <input name="search" placeholder="Search for a country..." value={searchInput} onChange={inputCountry}/>
            </form>
            { searchValidity === 'invalid' && <p><FontAwesomeIcon icon={faExclamation}/> <b>Country not found</b></p> }
        </div>
    )
}

export default Search
