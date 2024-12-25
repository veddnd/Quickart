import logo from "../../assests/images/logo.png"; // Potential Typo: 'assests' should be 'assets'
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import '../../App.css'; // Importing the CSS file
import Searchbox from "../Searchbox";
import Navigation from "./Navigation/index.js";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import Button from '@mui/material/Button'; // Correctly import the Button component
import {useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {
    // const { setislogin } = useContext(MyContext);
    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-8 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={logo} alt='Logo' /></Link> {/* Add meaningful alt text */}
                            </div>

                            <div className="col sm-10 d-flex align-items-center part2">
                                <CountryDropdown />
                                {/* Header search */}
                                <Searchbox />
                                {/* Right - Icons and Price */}

                                <div className="header-icons">
                                    {
                                        context.islogin !==true ?<Link to ="/signin"><Button className="signinb">Sign In</Button></Link> :
                                        <FiUser size={22} className="icon" />
                                    }
                                    
                                    
                                    <span className="cart-info">
                                        <FiShoppingCart size={22} className="icon" />
                                        <span className="cart-badge">1</span>
                                    </span>
                                    <span className="price-summary">$3.29</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                < Navigation />

            </div >
        </>
    );
};

export default Header;
