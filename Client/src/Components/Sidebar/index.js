import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";

const Sidebar = ({ setPriceRange, selectedCategoryIds, setSelectedCategoryIds, selectedBrands,setSelectedBrands }) => {
    const [value, setValue] = useState([100, 60000]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const token = sessionStorage.getItem("authToken");

    // Fetch categories
    useEffect(() => {
        fetch("http://localhost:4000/api/category", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setCategories(data.map((item) => ({ id: item.id, name: item.name })));
                }
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, [token]);

    // Fetch brands
    useEffect(() => {
        fetch("http://localhost:4000/api/Product", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    const uniqueBrands = [...new Set(data.map((item) => item.brand))];
                    setBrands(uniqueBrands);
                }
            })
            .catch((error) => console.error("Error fetching brands:", error));
    }, [token]);

    const handlePriceChange = (newValue) => {
        setValue(newValue);
        setPriceRange(newValue);
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategoryIds((prevSelectedIds) => {
            const updatedCategoryIds = prevSelectedIds.includes(categoryId)
                ? prevSelectedIds.filter((id) => id !== categoryId)
                : [...prevSelectedIds, categoryId];
            return updatedCategoryIds;
        });
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands((prevSelectedBrands) => {
            const updatedBrands = prevSelectedBrands.includes(brand)
                ? prevSelectedBrands.filter((b) => b !== brand)
                : [...prevSelectedBrands, brand];
            return updatedBrands;
        });
    };

    return (
        <div className="sidebar">
            <div className="sticky">
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <FormControlLabel
                                        className="w-100"
                                        control={
                                            <Checkbox
                                                checked={selectedCategoryIds.includes(category.id)}
                                                onChange={() => handleCategoryChange(category.id)}
                                            />
                                        }
                                        label={category.name}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="filterBoxprice">
                    <h6>FILTER BY PRICE</h6>
                    <RangeSlider
                        value={value}
                        onInput={handlePriceChange}
                        min={100}
                        max={60000}
                        step={100}
                        className="range-slider"
                    />
                    <div className="d-flex pt-2 pb-2 pricerange">
                        <span>
                            From: <strong className="text-success">$:{value[0]}</strong>
                        </span>
                        <span className="ml-auto pricerange">
                            To: <strong className="text-success">$:{value[1]}</strong>
                        </span>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>BRANDS</h6>
                    <div className="scroll">
                        <ul>
                            {brands.map((brand) => (
                                <li key={brand}>
                                    <FormControlLabel
                                        className="w-100"
                                        control={
                                            <Checkbox
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandChange(brand)}
                                            />
                                        }
                                        label={brand}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link to="#">
                    <img
                        src="https://images.unsplash.com/photo-1511895307821-692dc4ad27c5?w=500&auto=format&fit=crop&q=60"
                        alt="Sidebar Image"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
