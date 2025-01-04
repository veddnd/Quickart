import { IoMenu } from "react-icons/io5";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button'; import { FaMobile } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiTShirtFill } from "react-icons/ri";
import { MdBakeryDining } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import React, { useState } from 'react';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <button
                className={`allcattab align-items-center ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}>
                <IoMenu />
                <span>ALL CATEGORIES</span>
                <FaAngleDown />
            </button>

            {isOpen && (
                <div className="sidebar-menu shadow">
                    <ul>
                        <li>
                            <Link to="/cat">
                                <Button className="name">Men</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/cat"><Button className="name">T-Shirts</Button></Link>
                                <Link to="/cat"><Button className="name">Shirts</Button></Link>
                                <Link to="/cat"><Button className="name">Sweaters</Button></Link>
                                <Link to="/cat"><Button className="name">Pants</Button></Link>
                                <Link to="/cat"><Button className="name">Jackets</Button></Link>
                                
                            </div>
                        </li>
                        <li>
                            <Link to="/cat">
                                <Button className="name">Women</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/cat"><Button className="name">Dresses</Button></Link>
                                <Link to="/cat"><Button className="name">Tops</Button></Link>
                                <Link to="/cat"><Button className="name">Skirts</Button></Link>
                                <Link to="/cat"><Button className="name">Pants</Button></Link>
                                <Link to="/cat"><Button className="name">Jackets</Button></Link>
                                
                            </div>
                        </li>
                        <li>
                            <Link to="/cat">
                                <Button className="name">Sports & Activewear</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/cat"><Button className="name">Tracksuits</Button></Link>
                                <Link to="/cat"><Button className="name">Gym Wear</Button></Link>
                                <Link to="/cat"><Button className="name">Sports Shoes</Button></Link>
                                <Link to="/cat"><Button className="name">Jerseys</Button></Link>
                                
                            </div>
                        </li>
                        <li>
                            <Link to="/cat">
                                <Button className="name">Kids</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/cat"><Button className="name">T-Shirts</Button></Link>
                                <Link to="/cat"><Button className="name">Dresses</Button></Link>
                                <Link to="/cat"><Button className="name">Shorts</Button></Link>
                                <Link to="/cat"><Button className="name">Pants</Button></Link>
                                <Link to="/cat"><Button className="name">Outerwear</Button></Link>
                                
                            </div>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    );
};




const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-3-navpart1">
                        <div className="catwrapper">
                            {/* <Button className='allcattab align-items-center'><IoMenu /><span>ALL CATEGORIES  </span>
                                <FaAngleDown />
                            </Button> */}
                            {/* Sidebar */}
                            <Sidebar />
                        </div>

                    </div>

                    <div className='col-sm-9-navpart2 d-flex align-items-center'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <Link to="/"> <IoHome /> Home</Link>
                                <div className="submenu shadow">
                                    <Link to="/cat"> Men's Clothing</Link>
                                    <Link to="/cat"> Women's Clothing</Link>
                                    <Link to="/cat"> Kids' Wear</Link>
                                    <Link to="/cat"> Activewear</Link>
                                    <Link to="/cat"> Formal Wear</Link>
                                    <Link to="/cat"> Accessories</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <RiTShirtFill /> Tops & T-Shirts</Link>
                                <div className="submenu shadow">
                                    <Link to="/cat"> Casual T-Shirts</Link>
                                    <Link to="/cat"> Polo Shirts</Link>
                                    <Link to="/cat"> Tank Tops</Link>
                                    <Link to="/cat"> Graphic Tees</Link>
                                    <Link to="/cat"> Crop Tops</Link>
                                    <Link to="/cat"> Long Sleeves</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <FaMobile /> Bottoms</Link>
                                <div className="submenu shadow">
                                    <Link to="/cat"> Jeans</Link>
                                    <Link to="/cat"> Trousers</Link>
                                    <Link to="/cat"> Shorts</Link>
                                    <Link to="/cat"> Skirts</Link>
                                    <Link to="/cat"> Leggings</Link>
                                    <Link to="/cat"> Joggers</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <MdBakeryDining /> Outerwear</Link>
                                <div className="submenu shadow">
                                    <Link to="/cat"> Jackets</Link>
                                    <Link to="/cat"> Hoodies</Link>
                                    <Link to="/cat"> Coats</Link>
                                    <Link to="/cat"> Blazers</Link>
                                    <Link to="/cat"> Cardigans</Link>
                                    <Link to="/cat"> Sweatshirts</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <MdLocalGroceryStore /> Occasion Wear</Link>
                                <div className="submenu shadow">
                                    <Link to="/cat"> Party Wear</Link>
                                    <Link to="/cat"> Wedding Wear</Link>
                                    <Link to="/cat"> Festive Wear</Link>
                                    <Link to="/cat"> Casual Outfits</Link>
                                    <Link to="/cat"> Office Wear</Link>
                                    <Link to="/cat"> Vacation Wear</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <FaMicroblog /> Blog</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"> <BiSolidContact /> Contact us</Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Navigation