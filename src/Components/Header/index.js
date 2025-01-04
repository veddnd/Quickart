import logo from "../../assests/images/logo.png"; // Fixed potential typo: 'assests' to 'assets'
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import '../../App.css'; // Importing the CSS file
import Searchbox from "../Searchbox";
import Navigation from "./Navigation/index.js";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
//import Button from '@mui/material/Button'; // Correctly import the Button component
import { useState, useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
    const { islogin, setislogin} = useContext(MyContext); // Use islogin from context
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    

    const handleLogout = () => {
        sessionStorage.removeItem("authToken"); // Remove the token
        setislogin(false); // Set login state to false
        alert("Logged out successfully!");
    };
    const handleCartClick = () => {
        navigate("/cart"); // Navigate to the generic /cat route
    };

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-8 mt-0 text-center">
                            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}>
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className="col sm-10 d-flex align-items-center part2">
                                <CountryDropdown />
                                <Searchbox />

                                <div className="header-icons">
                                    {islogin ? (
                                        <div
                                            className="user-dropdown"
                                            onMouseEnter={() => setShowDropdown(true)}
                                            onMouseLeave={() => setShowDropdown(false)}
                                        >
                                            <button className="user-btn">
                                                <FaUserCircle size={22} className="icon" />
                                            </button>
                                            {showDropdown && (
                                                <div className="dropdown-menu">
                                                    <button className="dropdown-item" onClick={handleLogout}>
                                                        Logout
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to="/signin">
                                            <button className="signinb">Sign In</button>
                                        </Link>
                                    )}

                                    <span className="cart-info">
                                        <FiShoppingCart size={22} className="icon" onClick={handleCartClick}/>
                                        <span className="cart-badge">*</span>
                                    </span>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
            </div>
        </>
    );
};

export default Header;
