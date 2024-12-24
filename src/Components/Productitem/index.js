import Button from "@mui/material/Button";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";
import Productmodal from "../Productmodal/index.js";
import { useState } from "react";

const Productitem = () => {
    var productsslideropt = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    
    const [isopenproductmodal, setisopenproductmodal] = useState(false);
    const viewproductdetails = (id) => {
        setisopenproductmodal(true);
    }
    const closeProductmodal=()=>{
        setisopenproductmodal(false);
    }

    return (

        <section className="homeproducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661698075272-bc3e6308f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                                className="cursor" alt=""
                            />
                        </div>
                    </div>

                    <div className="col-md-9 productrow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">BEST SELLERS</h3>
                                <p className="text-light txt-sml mb-0">
                                    Do not miss the current offers until the end of March
                                </p>
                            </div>
                            <Button className="viewallbtn ml-auto">
                                View all <FaAngleRight />{" "}
                            </Button>
                        </div>

                        <div className="product_row">
                            <Slider {...productsslideropt}>
                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
                                            className="w-100" onClick={() => viewproductdetails(1)} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted"
                                                tabindex="0"  alt=""
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>

                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://media.istockphoto.com/id/2149798069/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=612x612&w=0&k=20&c=ZNGGjiRSDzzvhfwxe2sEPY8a-JPRl4E9ZotfedfdV_g="
                                            className="w-100" onClick={() => viewproductdetails(2)}  alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted"
                                                tabindex="0" alt=""
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>

                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                            className="w-100" onClick={() => viewproductdetails(3)} alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted"
                                                tabindex="0" alt=""
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>

                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwdHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
                                            className="w-100" alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted"
                                                tabindex="0" alt=""
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>

                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://images.unsplash.com/photo-1528812969535-4bcefc071532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwa3VydGl8ZW58MHx8MHx8fDA%3D"
                                            className="w-100" alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted"
                                                tabindex="0" alt=""
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>

                                <div className="item productitem">
                                    <div className="imgwrapper">
                                        <img
                                            src="https://plus.unsplash.com/premium_photo-1693242804074-20a78966f4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkc3dlYXJ8ZW58MHx8MHx8fDA%3D"
                                            className="w-100" alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="producttitle">
                                            <a
                                                href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/"
                                                title="Blue Diamond Almonds Lightly Salted" alt=""
                                                tabindex="0"
                                            >
                                                Blue Diamond Almonds Lightly Salted
                                            </a>
                                        </h3>
                                        <div className="productmeta">
                                            <div className="avail">In-Stock</div>
                                        </div>
                                        <div className="price">
                                            <span className="original-price">$9.35</span>
                                            <span className="discounted-price">$7.25</span>{" "}
                                            {/* Price */}
                                        </div>
                                        <button className="add-to-cart">Add to cart</button>{" "}
                                        {/* Add to Cart */}
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>


            {
                isopenproductmodal === true && <Productmodal closeProductmodal={closeProductmodal} />
            }

            {/* <Productmodal /> */}
        </section>
    )

}

export default Productitem;