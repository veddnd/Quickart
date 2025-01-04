import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import axios from "axios";
import Productmodal from "../Productmodal/index.js";

const Productitem = () => {
    const productsslideropt = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const [isopenproductmodal, setisopenproductmodal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = sessionStorage.getItem("authToken");
                if (!token) {
                    setError("User not authenticated! Please sign in.");
                    setLoading(false);
                    return;
                }

                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const response = await axios.get("http://localhost:4000/api/Product", { headers });
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Error fetching products! Please try again.");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const viewProductDetails = (product) => {
        setSelectedProduct(product);
        setisopenproductmodal(true);
    };

    const closeProductmodal = () => {
        setisopenproductmodal(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        // Redirect to the product details page with the token
        const token = sessionStorage.getItem("authToken");
        const productUrl = `/product/${product._id}?token=${token}`;
        window.location.href = productUrl; // Redirects the user to the product details page
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <section className="homeproducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661698075272-bc3e6308f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                                className="cursor"
                                alt="banner"
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
                                View all <FaAngleRight />
                            </Button>
                        </div>
                        <div className="product_row">
                            <Slider {...productsslideropt}>
                                {products.map((product) => (
                                    <div className="item productitem" key={product._id}>
                                        <div className="imgwrapper">
                                            <img
                                                src={product.images?.[0]?.[0] || "fallback_image_url"} // Fallback image if none exists
                                                className="w-100"
                                                onClick={() => viewProductDetails(product)}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="content">
                                            <h3 className="producttitle">
                                                <a href={`/product/${product._id}?token=${sessionStorage.getItem("authToken")}`} title={product.name}>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div className="productmeta">
                                                <div className="avail">In-Stock</div>
                                            </div>
                                            <div className="price">
                                                <span className="original-price">${product.price}</span>
                                            </div>
                                            <button
                                                className="add-to-cart"
                                                onClick={() => handleAddToCart(product)} // Pass the product here
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {isopenproductmodal && selectedProduct && (
                <Productmodal
                    closeProductmodal={closeProductmodal}
                    productData={selectedProduct}
                />
            )}
        </section>
    );
};

export default Productitem;
