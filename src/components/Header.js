import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <React.Fragment>
            <nav className="navigation">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/Pokemon'>Pokemon</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default Header 