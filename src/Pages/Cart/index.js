import { Link } from "react-router-dom";
import Quantitybox from "../../Components/Quantitybox";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6"
//import Button from "@mui/material/Button";
const Cart = () => {
    return (
        <section className="section cartpage">
            <div className="container">
            <h2 className="hd">Your Cart</h2>
            <p>There are <b>3</b> products in your cart</p>
                <div className="row">
                    <div className="col-md-8">
                        
                        <div className="carttable">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="35%">Product</th>
                                        <th width="15%">UnitPrice</th>
                                        <th width="25%">Quantity</th>
                                        <th width="15%">Total</th>
                                        <th width="10%">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                    <tr>
                                        <td width="35%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center cartimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyc2VzfGVufDB8fDB8fHww"
                                                            className="w-100"></img>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Puma sunglasses ihisd sahba jkdsaio</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td width="15%" > $10.00</td>
                                        <td width="25%"><Quantitybox/></td>
                                        <td width="15%"> $10.00</td>
                                        <td width="10%"><span className="remove"><MdOutlineDeleteOutline /></span></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div  className="card border p-3 carttotal">
                            <h4>CART TOTALS</h4>
                            <div  className ="d-flex align-items-center mt-3 mb-3">
                                <span>Subtotal </span>
                                <span className="ml-auto text-red">$100.00</span>
                            </div>
                            <div  className ="d-flex align-items-center mb-3">
                                <span>Shipping </span>
                                <span className="ml-auto "><b>Free</b></span>
                            </div>
                            <div  className ="d-flex align-items-center mb-3">
                                <span>Country </span>
                                <span className="ml-auto "><b>India</b></span>
                            </div>
                            <div  className ="d-flex align-items-center mb-3">
                                <span>Total </span>
                                <span className="ml-auto ">$100.00</span>
                            </div>

                            <button className="add-to-cart">Add to cart <FaCartShopping /> </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Cart;
