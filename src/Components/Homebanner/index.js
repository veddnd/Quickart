import React from "react";
import Slider from "react-slick";

const Homebanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true, // Enable center mode
        centerPadding: "50px", // Adjust this value for desired overlap
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "30px", // Smaller padding for mobile
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "10px", // Adjust further for very small screens
                },
            },
        ],
    };
    ;

    return (
        
        <div className="homebanner">
            <Slider {...settings}>
                <div className="item">
                    <img
                        src="https://cmsimages.shoppersstop.com/Monte_Carlo_web_39caea2943/Monte_Carlo_web_39caea2943.png"
                        className="w-100"
                        alt="Banner showcasing Fashor W and more"
                    />
                </div>

                <div className="item">
                    <img
                        src="https://cmsimages.shoppersstop.com/Blackberries_web_7272454735/Blackberries_web_7272454735.png"
                        className="w-100"
                        alt="Banner showcasing Allen Solly, Louis Philips, and more"
                    />
                </div>

                <div className="item">
                    <img
                        src="https://cmsimages.shoppersstop.com/main_banner_web_Skechers_Adidas_and_more_4355c5edda/main_banner_web_Skechers_Adidas_and_more_4355c5edda.png"
                        className="w-100"
                        alt="Banner showcasing Skechers, Adidas, and more"
                    />
                </div>

                <div className="item">
                    <img
                        src="https://cmsimages.shoppersstop.com/Issey_Miyake_19th_Dec_24_Web_91077a4566/Issey_Miyake_19th_Dec_24_Web_91077a4566.jpg"
                        className="w-100"
                        alt="Banner showcasing Issey Miyake products"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Homebanner;
