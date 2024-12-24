import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import liss from "../../assests/images/liss.png";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import Productmodal from "../../Components/Productmodal/index.js";
import Pagination from '@mui/material/Pagination';


const Listing = () => {
    const [isopenproductmodal, setisopenproductmodal] = useState(false);
    const [layout, setLayout] = useState("grid"); // State to track current layout

    const viewproductdetails = (id) => {
        setisopenproductmodal(true);
    };
    const closeProductmodal = () => {
        setisopenproductmodal(false);
    };

    const changeLayout = (layoutType) => {
        setLayout(layoutType); // Update layout type
    };

    return (
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />
                        <div className="content_right">
                            <img
                                src={liss}
                                alt="list"
                                className="w-100"
                                style={{ width: "100%", borderRadius: "8px" }}
                            />

                            <div className="showby mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button
                                        className="btnn"
                                        onClick={() => changeLayout("list")}
                                    >
                                        <IoMenuOutline />
                                    </Button>
                                    <Button
                                        className="btnn"
                                        onClick={() => changeLayout("grid")}
                                    >
                                        <CgMenuGridO />
                                    </Button>
                                </div>

                                <div className="ml-auto showbyfilter">
                                    <Button>
                                        Sort <FaAngleDown />
                                    </Button>
                                </div>
                            </div>

                            <div
                                className={`productlisting ${layout === "list"? "list-layout": layout === "compact"? "compact-layout": "grid-layout"}`}
                            >
                                {/* Repeat Product Item */}
                                {[...Array(12)].map((_, index) => (
                                    <div className="item productitem" key={index}>
                                        <div className="imgwrapper">
                                            <img
                                                src="https://media.istockphoto.com/id/2149798069/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=612x612&w=0&k=20&c=ZNGGjiRSDzzvhfwxe2sEPY8a-JPRl4E9ZotfedfdV_g="
                                                className="w-100"
                                                onClick={() => viewproductdetails(index)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h3 className="producttitle">
                                                <a
                                                    href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                    title="Blue Diamond Almonds Lightly Salted"
                                                    tabIndex="0"
                                                    alt=""
                                                >
                                                    Blue Diamond Almonds Lightly Salted
                                                </a>
                                            </h3>
                                            <div className="productmeta">
                                                <div className="avail">In-Stock</div>
                                            </div>
                                            <div className="price">
                                                <span className="original-price">$9.35</span>
                                                <span className="discounted-price">$7.25</span>
                                            </div>
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                ))}

                                {isopenproductmodal && (
                                    <Productmodal closeProductmodal={closeProductmodal} />
                                )}
                            </div>
                        
                        
                        <div className ="d-flex align-items-center justify-content-center">
                            <Pagination count={10} size="large" color="primary" />
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Listing;
