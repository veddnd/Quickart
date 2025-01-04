import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Relatedproducts from "./Relatedproducts";
import { MyContext } from "../../../App.js";
import Productitemcopy from "../../../Components/Productitem copy/index.js";

const Productdetails = () => {
    const { id } = useParams(); // Extract product ID from the route
    const [product, setProduct] = useState(null); // State to store product details
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    const context = useContext(MyContext); // Context
    const navigate = useNavigate(); // Use navigate hook

    // Fetch product details
    useEffect(() => {
        const fetchProduct = async () => {
            const token = sessionStorage.getItem("authToken"); // Retrieve the token

            if (!token) {
                setError("User not authenticated! Please sign in.");
                setLoading(false);
                return;
            }

            try {
                const headers = {
                    Authorization: `Bearer ${token}`, // Add token to headers
                };

                const response = await axios.get(`http://localhost:4000/api/Product/${id}`, { headers });
                setProduct(response.data); // Set product data
                setLoading(false); // Stop loading
            } catch (err) {
                console.error("Error fetching product details:", err);
                setError("Failed to fetch product details!");
                setLoading(false); // Stop loading
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>{error}</div>; // Show error message

    // Ensure product data exists before rendering
    if (!product) return null;

    const addtocart = async (id) => {
        const token = sessionStorage.getItem("authToken");
        if (!token) {
            alert("Please sign in to add products to the cart.");
            return;
        }
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            const cartItem = {
                producttitle: product.name,
                image: product.images[0][0],
                price: product.price,
                quantity: 1,
                total: product.price,
                productid: product._id,
                userid: context.userId,
            };

            const response = await axios.post(
                "http://localhost:4000/api/cart/add",
                cartItem,
                { headers }
            );

            if (response.status === 201) {
                alert("Product added to cart successfully!");
                navigate("/cart"); // Redirect to the cart page
            }
        } catch (err) {
            console.error("Error adding product to cart:", err);
            alert("Failed to add product to cart. Please try again.");
        }
    };

    return (
        <section className="productdetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={product.images[0][0]} 
                            alt={product.name}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h2 className="hd text-capitalize">{product.name}</h2>
                        <ul className="list list-inline d-flex align-items-center">
                            <li className="list-inline-item ">
                                <div className="d-flex align-items-center">
                                    <span className="text-light">Brand: </span>
                                    <span className="text-light"> {product.brand} </span>
                                </div>
                            </li>
                            <li className="list-inline-item ">
                                <div className="d-flex align-items-center">
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={product.rating}
                                        precision={0.1}
                                        readOnly
                                    />
                                    <span className="text-light cursor ml-2">
                                        {product.numReviews} Reviews
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <div className="product-pricing d-flex align-items-center">
                            <h2 className="product-price">${product.price}</h2>
                            <span className={`product-stock ${product.countinstock > 0 ? "in-stock" : "out-of-stock"}`}>
                                {product.countinstock > 0 ? "IN STOCK" : "OUT OF STOCK"}
                            </span>
                        </div>
                        <p className="product-description mt-3">{product.description}</p>

                        <div className="size-selector d-flex align-items-center">
                            <div className="h">
                                <span>Category:</span>
                                <div className="size-options">
                                    <span>{product.category}</span>
                                </div>
                            </div>

                            <div className="crt" style={{ marginLeft: "100px" }}>
                                <button
                                    className="add-to-cart ml-6 mt-0"
                                    onClick={() => addtocart(id)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pass the category to Relatedproducts */}
                <Relatedproducts title="RELATED PRODUCTS" category={product.category} />
                <Productitemcopy />
                
            </div>
        </section>
    );
};

export default Productdetails;
