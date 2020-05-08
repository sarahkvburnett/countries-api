import React from 'react'
import Toggle from './Toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const LightDarkMode = () => {
    return (
        <div className="mode">
            <FontAwesomeIcon icon={faSun} />
            <Toggle/>
            <FontAwesomeIcon icon={faMoon} />
        </div>
    )
}

export default LightDarkMode
