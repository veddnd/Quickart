import React from "react";
import { MdClose } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Quantitybox from "../Quantitybox/index.js";


const Productmodal = (props) => {
    return (
        <Dialog
            open={true}
            className="productmodal"
            onClose={() => props.closeProductmodal()}
        >
            <div className="product-modal-content">
                {/* Close button */}
                <Button
                    className="close-button"
                    onClick={() => props.closeProductmodal()}
                >
                    <MdClose />
                </Button>

                {/* Product details */}
                
                <div className="product-details">
                    {/* Product Title */}
                    <h4 className="product-title mb-0">Prada Sunglasses </h4>

                    {/* Product Information */}
                    <div className="product-meta">
                        <span className="product-review">★ 1 REVIEW</span>
                        <span className="product-sku">SKU: VUYT31</span>
                    </div>

                    {/* Product Image */}
                    <div className="product-image">
                        <img
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="Product"
                        />

                    </div>

                    {/* Product Pricing and Stock */}
                    <div className="product-pricing">
                        <h2 className="product-price">$1.44</h2>
                        <span className="product-stock in-stock ">IN STOCK</span>
                    </div>

                    {/* Product Description */}
                    <p className="product-description">
                        Designed for modern sophistication, these shades feature a sleek frame an
                        d high-quality polarized lenses to protect your eyes while enhancing your
                        vision. Whether you're strolling on the beach or driving through the city, the
                        timeless elegance of Prada ensures you stand out in every setting.
                    </p>

                    {/* Quantity and Add to Cart */}
                    <Quantitybox />

                    {/* Category */}
                    <div className="product-category">
                        <span>Category: Sunglasses</span>
                    </div>
                </div>


            </div>
        </Dialog>
    );
};

export default Productmodal;
