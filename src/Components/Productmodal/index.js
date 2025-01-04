import React from "react";
import { MdClose } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Quantitybox from "../Quantitybox/index.js";

const Productmodal = ({ closeProductmodal, productData }) => {
    return (
        <Dialog
            open={true}
            className="productmodal"
            onClose={closeProductmodal}
        >
            <div className="product-modal-content">
                <Button className="close-button" onClick={closeProductmodal}>
                    <MdClose />
                </Button>

                <div className="product-details">
                    {/* Product Title */}
                    <h4 className="product-title mb-0">{productData.name}</h4>

                    {/* Product Information */}
                    <div className="product-meta">
                        <span className="product-review">★ {productData.rating} REVIEWS</span>
                        <span className="product-sku">SKU: {productData._id}</span>
                    </div>

                    {/* Product Image */}
                    <div className="product-image">
                        <img
                            src={productData.images[0][0]}
                            alt={productData.name}
                        />
                    </div>

                    {/* Product Pricing and Stock */}
                    <div className="product-pricing">
                        <h2 className="product-price">${productData.price}</h2>
                        <span
                            className={`product-stock ${
                                productData.countinstock > 0 ? "in-stock" : "out-of-stock"
                            }`}
                        >
                            {productData.countinstock > 0 ? "IN STOCK" : "OUT OF STOCK"}
                        </span>
                    </div>

                    {/* Product Description */}
                    <p className="product-description">
                        {productData.description}
                    </p>

                    {/* Quantity and Add to Cart */}
                    <Quantitybox />

                    {/* Category */}
                    <div className="product-category">
                        <span>Category: {productData.category.name}</span>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Productmodal;
