import Homebanner from "../../Components/Homebanner/index.js";
import Productitem from "../../Components/Productitem/index.js";
import Newarrivals from "../../Components/Newarrivals/index.js";
import React from "react";
import Homecat from "../../Components/Homecat/index.js";
import Footer from "../../Components/Footer/index.js";

const Home = () => {


    return (
        <>
            <Homebanner />
            <Homecat />
            <Productitem />
            <Newarrivals/>

            <section className="homeicons">
                <div className="container">
                    <div className="inf text-center mx-3">
                        <h2 className="he">Our Top Collaborates</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {" "}
                        {/* Added flexbox classes */}
                        <div className="iconbox text-center mx-3">
                            <img
                                src="https://thumbs.dreamstime.com/b/nike-inc-american-multinational-corporation-engaged-design-development-manufacturing-worldwide-marketing-139136474.jpg"
                                className="cursor"
                                alt="icon"
                            />
                            <h4 className="mb-0">Nike</h4>
                        </div>
                        
                        <div className="iconbox text-center mx-3">
                            <img
                                src="https://cleanclothes.org/image-repository/livingwage-living-wage-images-h-m-logo/@@images/image.jpeg"
                                className="cursor"
                                alt="icon"
                            />
                            <h4 className="mb-0">H&M</h4>
                        </div>

                        <div className="iconbox text-center mx-3">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/027/127/562/small_2x/jordan-logo-jordan-icon-transparent-free-png.png"
                                className="cursor"
                                alt="icon"
                            />
                            <h4 className="mb-0">Jordan</h4>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Home;
