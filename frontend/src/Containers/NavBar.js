import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';


class NavBar extends React.Component {


    handleHome = () => {
        history.push('/');
    };

    render() {

        return (
            <nav>
            <div>
                <h3 onClick={this.handleHome} className="logo">HomeHunter</h3>
            </div>
            <ul className="nav-links">
                <Link to="/for-sale">
                    <li>Buy</li>
                </Link>
                <Link to="/for-rent">
                    <li>Rent</li>
                </Link>
                <Link>
                    <li>Login</li>
                </Link>
                <Link>
                    <li>Join</li>
                </Link>
            </ul>
        </nav>
        )
    }
    
}

export { NavBar }
