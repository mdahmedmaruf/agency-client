import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext, UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    return (
        <motion.nav className="navbar navbar-expand-lg navbar-light bg-transparent mx-3 pt-4"
        initial={{y: -250}} 
        animate={{y: -10}} 
        transition={{delay: 0.2, type: 'spring', stiffness: 120}}
        >
            <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto d-flex align-middle">
                <li className="nav-item mx-2 mt-2 active">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mx-2 mt-2">
                    <Link to="/" className="nav-link">Our Portfolio</Link>
                </li>
                <li className="nav-item mx-2 mt-2">
                    <Link to="/" className="nav-link">Our Team</Link>
                </li>
                <li className="nav-item mx-2 mt-2">
                    <Link to="/" className="nav-link">Contact Us</Link>
                </li>
                {
                    loggedInUser.email ? (
                        <>
                        <li className="nav-item dropdown ml-2  user-name">
                            <p className="nav-link dropdown-toggle mb-0" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">
                                {loggedInUser.name}<span className="profile-pic"><img src={loggedInUser.photo} alt="login-user-pic"/></span>
                            </p>
                            <div style={{zIndex: '3'}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <>
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                </>
                                <p onClick={() => setLoggedInUser({})} className="dropdown-item mb-0" role="button">Sign Out</p>
                            </div>
                        </li>
                        </>
                        ) : (
                        <li className="nav-item mx-2 mt-2 px-4 bg-dark rounded-sm">
                            <Link className="nav-link text-light" to="/login">Login</Link>
                        </li>
                        )
                }

                </ul>
            </div>
        </motion.nav>

    );
};

export default NavBar;