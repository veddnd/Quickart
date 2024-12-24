import Rating from '@mui/material/Rating';
// import Button from "@mui/material/Button";
import Quantitybox from '../../../Components/Quantitybox';
import Relatedproducts from './Relatedproducts';

const Productdetails = () => {
    return (<>
        <section className="productdetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="Product" style={{
                                transition: "transform 0.3s ease",
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h2 className="hd text-capitalize">Prada Sunglasses </h2>
                        <ul className="list list-inline d-flex align-items-center">
                            <li className="list-inline-item ">
                                <div className="d-flex align-items-center">
                                    <span className="text-light">Brand : </span>
                                    <span className="text-light"> Welsch </span>
                                </div>

                            </li>
                            <li className="list-inline-item ">
                                <div className="d-flex align-items-center">
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    <span className='text-light cursor ml-2'>1 Review</span>
                                </div>
                            </li>
                        </ul>

                        <div className="product-pricing d-flex align-items-center">
                            <h2 className="product-price">$1.44</h2>
                            <span className="product-stock in-stock ">IN STOCK</span>
                        </div>
                        <p className="product-description mt-3">
                            Designed for modern sophistication, these shades feature a sleek frame an
                            d high-quality polarized lenses to protect your eyes while enhancing your
                            vision. Whether you're strolling on the beach or driving through the city, the
                            timeless elegance of Prada ensures you stand out in every setting.
                        </p>

                        <div className="size-selector mt-4">
                            <span>Select Size:</span>
                            <div className="size-options d-flex align-items-center mt-2">
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button key={size} className="size-btn">{size}</button>
                                ))}
                            </div>
                        </div>

                        <div className='d-flex align-items-center mt-3'>
                            <Quantitybox />
                            <div className="crt" style={{ marginLeft: "35px" }}>
                                <button className="add-to-cart ml-6 mt-0">Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>

                <Relatedproducts title="RELATED PRODUCTS"/>
                <Relatedproducts title="RECENTLY VIEWED PRODUCTS"/>
            </div>
        </section>

    </>
    )
}

export default Productdetails;