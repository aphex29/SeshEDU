import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li id="navSeshEDU">
                    <NavLink to="/"
                        style={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"white", 
                            textDecoration: "none"
                        }}>
                        Sesh<span className="navEDU">EDU</span>
                    </NavLink>
                </li>
                <li>
                    <HashLink smooth to="/#detailDiv"
                        style={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"white", 
                            textDecoration: "none"
                        }}>
                        How It Works 
                    </HashLink></li>
                <li>
                    <HashLink smooth to="/#aboutDiv"
                        style={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"white", 
                            textDecoration: "none"
                        }}>
                        About Us
                    </HashLink></li>
                <li>
                    <NavLink to="/team"
                        style={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        >Team
                    </NavLink>
                </li>
                {!props.isLoggedIn && <li>Login</li>}
                {!props.isLoggedIn && <li>Create Account</li>}
                {props.isLoggedIn && <li>
                    <NavLink to="/profile"
                        style={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"white", 
                            textDecoration: "none"
                        }}
                        >Profile
                    </NavLink> 
                    </li>}
                {props.isLoggedIn && <li>Sign Out</li>}
            </ul>
        </nav>
    );
}

NavBar.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default NavBar;
