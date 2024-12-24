import { Swiper, SwiperSlide } from "swiper/react";
import sports from "../../assests/images/sports.jpg";
import party from "../../assests/images/party.jpg";
import traditonal from "../../assests/images/traditonal.png";
import ca from "../../assests/images/ca.png";
import et from "../../assests/images/et.png";
import f from "../../assests/images/f.png";
import wedding from "../../assests/images/wedding .jpg";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const Homecat = () => {
    const [items, setItems] = useState([
            { image: sports, name: "Sports Wear" },
            { image: traditonal, name: "Traditional Wear" },
            { image: party, name: "Party Wear" },
            { image: ca, name: "Casual Wear" },
            { image: wedding, name: "wedding Wear" },
            { image: et, name: "Ethnic Wear" },
            { image: f, name: "Formal Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Workout Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Night Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Maternity Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Street Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Festival Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Office Wear" },
            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Orange_Fruit.jpg", name: "Travel Wear" },
    ]);

    return (
        <div className="homecat" style={{ padding: "20px 0" }}>
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
                    spaceBetween={15} // Adjust gap between slides
                    slidesPerView={7} // Number of visible slides
                    navigation={true} // Enable navigation arrows
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
                                    background: "#eddcf2",
                                    borderRadius: "500px",
                                    width: "150px",
                                    height: "150px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    marginTop: "20px",
                                }}
                            >
                                <img src={item.image}
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
