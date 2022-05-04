import { findAllByDisplayValue } from '@testing-library/react';
import { useState } from 'react';
import './NavBar.css';

const NavBar = ({scrolled}) => {
    
    return (
        <div className={`nav ${scrolled ? 'navScrolled' : ''}`}>
            <div className="title-container">
                <p>BROOKE</p>
            </div>
            <div className="list-container">
                <ul>
                    <li className="navListItem">
                        <p>
                            ABOUT ME
                        </p>
                    </li>
                    <li className="navListItem">
                        <p>
                            EXPRIENCE
                        </p>
                    </li >
                    <li className="navListItem">
                        <p>
                            TESTIMONILAS
                        </p>
                    </li>
                    <li className="navListItem">
                        <p>
                            CONTACTS
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default NavBar;