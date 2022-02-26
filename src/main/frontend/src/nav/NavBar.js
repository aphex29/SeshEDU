import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
    const { username } = props;

    return (
        <nav>
            <ul>
                <li id="navSeshEDU">
                    <NavLink to="/"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}>
                        Sesh<span className="navEDU">EDU</span>
                    </NavLink>
                </li>
                <li>
                    <HashLink smooth to="/#detailDiv"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}>
                        How It Works 
                    </HashLink></li>
                <li>
                    <HashLink smooth to="/#aboutDiv"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}>
                        About Us
                    </HashLink></li>
                <li>
                    <NavLink to="/team"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        >Team
                    </NavLink>
                </li>
                {!props.isLoggedIn && <li>
                    <HashLink smooth to="/#formAlign"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}>
                        Login
                    </HashLink></li>}
                {!props.isLoggedIn && <li><HashLink smooth to="/#formAlign"
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}>
                        Create Account
                    </HashLink></li>}
                {props.isLoggedIn && <li>
                    <NavLink to={"/profile/" + username}
                        style={{
                            color:"#FFFFFF", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#FFFFFF", 
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
