import React, { useState, useEffect } from 'react'
import './styles/app.css'
import Nav from './components/Nav'
import Search from './components/Search'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail.js'

function App() {
  const [ countryList, setCountryList ] = useState([])
  const [ activeCountry, setActiveCountry ] = useState('')
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ currentCountries, setCurrentCountries ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [ searchValidity, setSearchValidity ] = useState('')

  const countriesPerPage = 10
 
  const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }
  
  const setCountries = (countries) => {
    setCountryList(countries)
    setCurrentCountries(countries.filter((e, i) => i < countriesPerPage))
  }

  const pagination = {
      countriesPerPage,
      totalCountries: countryList.length, 
      paginate: function(pageNumber){
        setCurrentPage(pageNumber)
        const indexOfLastCountry = pageNumber * countriesPerPage
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
        setCurrentCountries(() => countryList.slice(indexOfFirstCountry, indexOfLastCountry))
      }
    }

  const countries = {
    currentCountries,
    activeCountry,
    addActiveCountry: function(country){setActiveCountry(country)},
    removeActiveCountry: function(){setActiveCountry('')}
  }

  const search = {
    searchInput,
    searchValidity,
    inputCountry: function(e){
      setSearchValidity('blank')
      setSearchInput(e.target.value)
    },
    findCountry: function(e){
      e.preventDefault()
      const country = countryList.filter((country) => country.name === searchInput)
      if (country[0]) setActiveCountry(country[0])
      else setSearchValidity('invalid')
    }
  }

  useEffect(getCountries, [])

  return (
    <div>
      <Nav/>
      { activeCountry === "" && <Search search={search}/> }
      { activeCountry === "" && <CountryList countries={countries} pagination={pagination}/> }
      { activeCountry !== "" && <CountryDetail countries={countries}/> }
    </div>
  )
}

export default App
