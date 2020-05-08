import React from 'react'

const Pagination = ({ pagination }) => { 
    const { paginate, totalCountries, countriesPerPage } = pagination
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className="pagination">
            Page
            {
            pageNumbers.map(number => (
                <li key={number} className='pageItem'>
                    <a onClick={() => paginate(number)} href='!#' className='pageLink'>{number}</a>
                </li>
            ))
            }
        </ul>
    )
}

export default Pagination
