import React from 'react';

function NavBar() {

    return (
        <nav>
            <div>
                <h3>homeFinder</h3>
            </div>
            <ul className="nav-links">
                <li>Buy</li>
                <li>Rent</li>
                <li>Login</li>
                <li>Join</li>
            </ul>
        </nav>
    )
}

export { NavBar }
