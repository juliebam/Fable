import React from 'react';

import Logo from './Logo';


const NavBar = () => {
    return(
        <nav className="flex">
            <Logo />
            <ul>
                <li>Collections</li>
                <li>Customizer</li>
                <li>Sale</li>
            </ul>
            <div>Items</div>
        </nav>
    )
}


export default NavBar;