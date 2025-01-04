import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import liss from "../../assests/images/liss.png";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import Productmodal from "../../Components/Productmodal";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Listing = () => {
    const [isopenproductmodal, setisopenproductmodal] = useState(false);
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([100, 60000]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [layout, setLayout] = useState("grid");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    const viewproductdetails = (product) => {
        setSelectedProduct(product);
        setisopenproductmodal(true);
    };

    const closeProductmodal = () => {
        setisopenproductmodal(false);
        setSelectedProduct(null);
    };

    const changeLayout = (layoutType) => {
        setLayout(layoutType);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const token = sessionStorage.getItem("authToken");
            try {
                const [minPrice, maxPrice] = priceRange;
                const queryParams = new URLSearchParams({
                    minPrice,
                    maxPrice,
                    categories: selectedCategoryIds.join(","),
                    brands: selectedBrands.join(","),
                });

                const response = await axios.get(
                    `http://localhost:4000/api/Product?${queryParams}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        setLoading(true);
        fetchProducts();
    }, [priceRange, selectedCategoryIds, selectedBrands]);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddToCart = (product) => {
        const token = sessionStorage.getItem("authToken");
        // Construct the URL with product ID and token
        const productUrl = `/product/${product._id}?token=${token}`;
        // Redirect the user to the product details page
        navigate(productUrl);
    };

    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    <Sidebar
                        setPriceRange={setPriceRange}
                        selectedCategoryIds={selectedCategoryIds}
                        setSelectedCategoryIds={setSelectedCategoryIds}
                        setSelectedBrands={setSelectedBrands}
                        selectedBrands={selectedBrands}
                    />
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
                            className={`productlisting ${
                                layout === "list"
                                    ? "list-layout"
                                    : layout === "compact"
                                    ? "compact-layout"
                                    : "grid-layout"
                            }`}
                        >
                            {loading ? (
                                <p>Loading products...</p>
                            ) : (
                                currentProducts.map((product, index) => (
                                    <div className="item productitem" key={index}>
                                        <div className="imgwrapper">
                                            <img
                                                src={product.images[0]}
                                                className="w-100"
                                                onClick={() => viewproductdetails(product)}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="content">
                                            <h3 className="producttitle">
                                                <a
                                                    href={`/product/${product._id}`}
                                                    title={product.name}
                                                    tabIndex="0"
                                                >
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div className="productmeta">
                                                <div className="avail">In-Stock</div>
                                            </div>
                                            <div className="price">
                                                <span className="original-price">
                                                    ${product.price}
                                                </span>
                                            </div>
                                            <button
                                                className="add-to-cart"
                                                onClick={() => handleAddToCart(product)} // Call handleAddToCart on click
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {isopenproductmodal && selectedProduct && (
                            <Productmodal
                                closeProductmodal={closeProductmodal}
                                productData={selectedProduct}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Pagination
                count={Math.ceil(products.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
            />
        </section>
    );
};

export default Listing;
