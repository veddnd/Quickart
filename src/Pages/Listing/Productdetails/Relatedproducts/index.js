import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Productmodal from "../../../../Components/Productmodal";
import axios from "axios";

const Relatedproducts = (props) => {
    const [products, setProducts] = useState([]); // State for storing products
    const [isopenproductmodal, setisopenproductmodal] = useState(false); // State for modal
    const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

    const token = sessionStorage.getItem("authToken"); // Fetch token from sessionStorage

    const productsslideropt = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/Product", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the request headers
                    },
                });
                setProducts(response.data); // Set fetched data to state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [token]);

    const viewProductDetails = (product) => {
        setSelectedProduct(product); // Set the selected product
        setisopenproductmodal(true); // Open modal
    };

    const closeProductModal = () => {
        setisopenproductmodal(false); // Close modal
    };
    const handleAddToCart = (product) => {
        // Redirect to the product details page with the token
        const token = sessionStorage.getItem("authToken");
        const productUrl = `/product/${product._id}?token=${token}`;
        window.location.href = productUrl; // Redirects the user to the product details page
    };


    return (
        <section className="homeproductss">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 productrows mt-3">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h4 className="mb-0 hd">{props.title}</h4>
                            </div>
                        </div>

                        <div className="product_row">
                            <Slider {...productsslideropt}>
                                {products.map((product) => (
                                    <div className="item productitem" key={product.id}>
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
                                                <div className="avail">
                                                    {product.inStock ? "In-Stock" : "Out of Stock"}
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span className="original-price">
                                                    ${product.price}
                                                </span>
                                                {product.discountedPrice && (
                                                    <span className="discounted-price">
                                                        ${product.discountedPrice}
                                                    </span>
                                                )}
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

            {isopenproductmodal && (
                <Productmodal
                    closeProductmodal={closeProductModal}
                    product={selectedProduct} // Pass selected product details
                />
            )}
        </section>
    );
};

export default Relatedproducts;
