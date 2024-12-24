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
                            <Link to="/">
                                <Button className="name">Men</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">T-Shirts</Button></Link>
                                <Link to="/"><Button className="name">Shirts</Button></Link>
                                <Link to="/"><Button className="name">Sweaters</Button></Link>
                                <Link to="/"><Button className="name">Pants</Button></Link>
                                <Link to="/"><Button className="name">Jackets</Button></Link>
                                <Link to="/"><Button className="name">Accessories</Button></Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/">
                                <Button className="name">Women</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">Dresses</Button></Link>
                                <Link to="/"><Button className="name">Tops</Button></Link>
                                <Link to="/"><Button className="name">Skirts</Button></Link>
                                <Link to="/"><Button className="name">Pants</Button></Link>
                                <Link to="/"><Button className="name">Jackets</Button></Link>
                                <Link to="/"><Button className="name">Accessories</Button></Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/">
                                <Button className="name">Beauty</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">Makeup</Button></Link>
                                <Link to="/"><Button className="name">Skincare</Button></Link>
                                <Link to="/"><Button className="name">Haircare</Button></Link>
                                <Link to="/"><Button className="name">Fragrances</Button></Link>
                                <Link to="/"><Button className="name">Tools</Button></Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/">
                                <Button className="name">Watches</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">Men's Watches</Button></Link>
                                <Link to="/"><Button className="name">Women's Watches</Button></Link>
                                <Link to="/"><Button className="name">Smartwatches</Button></Link>
                                <Link to="/"><Button className="name">Luxury Watches</Button></Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/">
                                <Button className="name">Kids</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">Toys</Button></Link>
                                <Link to="/"><Button className="name">Clothing</Button></Link>
                                <Link to="/"><Button className="name">Shoes</Button></Link>
                                <Link to="/"><Button className="name">Books</Button></Link>
                                <Link to="/"><Button className="name">Accessories</Button></Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/">
                                <Button className="name">Gift</Button>
                            </Link>
                            <div className="submenu">
                                <Link to="/"><Button className="name">For Him</Button></Link>
                                <Link to="/"><Button className="name">For Her</Button></Link>
                                <Link to="/"><Button className="name">For Kids</Button></Link>
                                <Link to="/"><Button className="name">Personalized Gifts</Button></Link>
                                <Link to="/"><Button className="name">Gift Cards</Button></Link>
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
                    <div className=' col-sm-9-navpart2 d-flex align-items-center'>
                        <ul className='list list-inline  '>
                            <li className='list-inline-item'><Link to="/"> <IoHome /> Home</Link>
                                <div className="submenu shadow">
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"> <RiTShirtFill /> Fashion</Link>
                                <div className="submenu shadow">
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"> <FaMobile /> Electronics</Link>
                                <div className="submenu shadow">
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"> <MdBakeryDining /> Bakery</Link>
                                <div className="submenu shadow">
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"> <MdLocalGroceryStore /> Groceries</Link>
                                <div className="submenu shadow">
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                    <Link to="/"> Fashion</Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"> <FaMicroblog /> Blog</Link></li>
                            <li className='list-inline-item'><Link to="/"><BiSolidContact /> Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation