import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import axios from "axios";
import Productmodal from "../Productmodal/index.js";
import { useNavigate } from "react-router-dom";

const Newarrivals = () => {
    const productsslideropt = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const navigate = useNavigate(); // Initialize the navigate function

    const [isopenproductmodal, setisopenproductmodal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product
    const [products, setProducts] = useState([]); // State for products list
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from backend
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

                const response = await axios.get("http://localhost:4000/api/newarrivals", { headers });
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
        setSelectedProduct(product); // Set the clicked product
        setisopenproductmodal(true);
    };

    const closeProductmodal = () => {
        setisopenproductmodal(false);
        setSelectedProduct(null); // Reset selected product when modal is closed
    };

    const handleNavigateToProduct = (productId) => {
        navigate(`/newarrivals/${productId}`);
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
                    <div className="col-md-12 productrow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">NEW ARRIVALS</h3>
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
                                                src={product.images[0][0]} // Accessing the first image
                                                className="w-100"
                                                onClick={() => viewProductDetails(product)}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="content">
                                            <h3 className="producttitle">
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevent default anchor behavior
                                                        handleNavigateToProduct(product._id);
                                                    }}
                                                    title={product.name}
                                                >
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div className="productmeta">
                                                <div className="avail">
                                                    {product.countinstock > 0 ? "In-Stock" : "Out of Stock"}
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span className="original-price">${product.price}</span>
                                            </div>
                                            <button
                                                className="add-to-cart"
                                                onClick={() => viewProductDetails(product)} // Pass the product here
                                            >
                                                View Details
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
                    productData={selectedProduct} // Pass the selected product as a prop
                />
            )}
        </section>
    );
};

export default Newarrivals;
