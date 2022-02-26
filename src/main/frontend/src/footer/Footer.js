import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer(props) {
    const { isLoggedIn, setIsLoggedIn } = props;
    return (
        <footer>
            <h2>SeshEDU</h2>

            <ul>
                <li>
                    <HashLink smooth to="/#detailDiv"
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}>
                        How It Works 
                    </HashLink></li>
                <li>
                    <HashLink smooth to="/#aboutDiv"
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}>
                        About Us
                    </HashLink></li>
                <li>
                    <NavLink to="/team"
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        >Team
                    </NavLink>
                </li>
                {!isLoggedIn && <li>
                    <HashLink smooth to="/#formAlign"
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}>
                        Login
                    </HashLink></li>}
                {!isLoggedIn && <li><HashLink smooth to="/#formAlign"
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}>
                        Create Account
                    </HashLink></li>}
                {isLoggedIn && <li><NavLink to={"/"} 
                        onClick={() => setIsLoggedIn(false)}
                        style={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}
                        activestyle={{
                            color:"#000000", 
                            textDecoration: "none"
                        }}>
                        Log Out
                    </NavLink></li>}
            </ul>

            <p id="copy">&copy; 2022 SeshEDU</p>
        </footer>
    );
}

export default Footer;