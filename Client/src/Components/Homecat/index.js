import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SignInDialog from "../SignInDialog/index.js";

const Homecat = () => {
    const [items, setItems] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const token = sessionStorage.getItem("authToken");

        if (!token) {
            setShowDialog(true);
            return;
        }

        axios
            .get("http://localhost:4000/api/category", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                const categories = response.data.map((category) => ({
                    image: category.images[0],
                    name: category.name,
                    color: category.color || "#eddcf2",
                }));
                setItems(categories);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleCategoryClick = () => {
        navigate("/cat"); // Navigate to the generic /cat route
    };

    const handleSignIn = () => {
        window.location.href = "/signin";
    };

    return (
        <div className="homecat" style={{ padding: "20px 0" }}>
            <SignInDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
                onSignIn={handleSignIn}
            />

            <div className="container">
                <div className="newarr text-center">
                    <div className="info w-300">
                        <h3 className="mb-0 hd">CATEGORIES</h3>
                        <p className="text-light txt-sml mb-0">
                            Fresh and trending collections you'll love to explore
                        </p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={15}
                    slidesPerView={7}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 7 },
                    }}
                    className="mySwiper custom-navigation"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="item text-center"
                                style={{
                                    background: item.color,
                                    borderRadius: "500px",
                                    width: "150px",
                                    height: "150px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    marginTop: "20px",
                                    cursor: "pointer", // Add pointer cursor
                                }}
                                onClick={handleCategoryClick} // Navigate to /cat on click
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: "80%",
                                        height: "80%",
                                        objectFit: "contain",
                                        borderRadius: "60px",
                                    }}
                                />
                            </div>
                            <h3
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginTop: "15px",
                                    textAlign: "center",
                                }}
                            >
                                {item.name}
                            </h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Homecat;
