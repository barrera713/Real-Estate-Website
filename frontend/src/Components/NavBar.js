import React from 'react';
import history from '../history';

class NavBar extends React.Component {

    buy = () => {
        history.push('/for-sale')
    }

    render() {
        return (
            <nav>
            <div>
                <h3>homeFinder</h3>
            </div>
            <ul className="nav-links">
                <li onClick={this.buy}>Buy</li>
                <li>Rent</li>
                <li>Login</li>
                <li>Join</li>
            </ul>
        </nav>
        )
    }
    
}

export { NavBar }
