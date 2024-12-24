import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [value, setvalue] = useState([100, 60000]);
    const handlePriceChange = (newValue) => {
        // Update state with the new range values
        setvalue(newValue);
    };
    return (
        <>
            <div className="sidebar">
                <div className="sticky">
                    <div className="filterBox">
                        <h6>PRODUCT CATEGORIES</h6>
                        <div className="scroll">
                            <ul>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Men"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Women"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Kids"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Others"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Winter"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Summer"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Rainy"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Others"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Winter"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Summer"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Rainy"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Others"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Winter"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Summer"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Rainy"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Others"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Winter"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Summer"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Rainy"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="filterBoxprice">
                        <h6>FILTER BY PRICE</h6>
                        <RangeSlider
                            value={value}
                            onInput={handlePriceChange} // Handle value changes
                            min={100}
                            max={60000}
                            step={100}
                            className="range-slider"
                        />
                        <div className="d-flex pt-2 pb-2 pricerange">
                            <span>
                                From: <strong className="text-success">Rs:{value[0]}</strong>
                            </span>
                            <span className="ml-auto pricerange">
                                To: <strong className="text-success">Rs:{value[1]}</strong>
                            </span>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>BRANDS</h6>
                        <div className="scroll">
                            <ul>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Nike"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Adidas"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Puma"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Zara"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="H&M"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Gucci"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Louis Vuitton"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Levi's"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Tommy Hilfiger"
                                    />
                                </li>
                                <li>
                                    <FormControlLabel
                                        className="w-100"
                                        control={<Checkbox />}
                                        label="Burberry"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to="#" ><img src="https://images.unsplash.com/photo-1511895307821-692dc4ad27c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdpZnQlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D" /></Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
