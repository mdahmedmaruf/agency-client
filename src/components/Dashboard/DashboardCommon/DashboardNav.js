import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const DashboardNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-light bg-transparent px-5 py-4">
            <Link to="/" className="navbar-brand">
                <img style={{width: '92%'}} src={logo} alt=""/>
            </Link>
            <li className="nav-item dropdown ml-2  user-name">
                <p className="nav-link dropdown-toggle mb-0" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">
                    {loggedInUser.name}<span className="profile-pic"><img src={loggedInUser.photo} alt="login-user-pic"/></span>
                </p>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/order" className="dropdown-item">Order</Link>
                    <Link to="/service-lists" className="dropdown-item">Service Lists</Link>
                    <Link to="/reviews" className="dropdown-item">Reviews</Link>
                    <p onClick={() => setLoggedInUser({})} className="dropdown-item mb-0" role="button">Sign Out</p>
                </div>
            </li>
        </nav>
    );
};

export default DashboardNav;