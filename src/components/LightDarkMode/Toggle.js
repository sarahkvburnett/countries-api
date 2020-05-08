import React from 'react'

const Toggle = () => {
    return (
        <label className="toggle">
            <input type="checkbox"/>
            <span className="slider" role="button" tabIndex="0"></span>
        </label>
    )
}

export default Toggle
