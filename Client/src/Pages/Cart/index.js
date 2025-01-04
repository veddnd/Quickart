import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quantitybox from "../../Components/Quantitybox";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/cart", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`, // Use token to identify the user
                    },
                });
                const data = await response.json();
                const userCartItems = data.filter(item => item.userid === sessionStorage.getItem("userId"));
                setCartItems(userCartItems);
                const total = userCartItems.reduce((sum, item) => sum + item.total, 0);
                setSubTotal(total);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = (id, newQuantity) => {
        // Update the quantity of the cart item
        const updatedCart = cartItems.map(item => {
            if (item._id === id) {
                return {
                    ...item,
                    quantity: newQuantity,
                    total: item.price * newQuantity, // Recalculate total for the item
                };
            }
            return item;
        });
    
        setCartItems(updatedCart);
    
        // Recalculate the subtotal
        const newSubTotal = updatedCart.reduce((sum, item) => sum + item.total, 0);
        setSubTotal(newSubTotal);
    };
    

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cart/remove/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
                },
            });

            if (response.ok) {
                // Remove the item from the state
                const updatedCart = cartItems.filter(item => item._id !== id);
                setCartItems(updatedCart);

                // Recalculate the subtotal
                const newSubTotal = updatedCart.reduce((sum, item) => sum + item.total, 0);
                setSubTotal(newSubTotal);
            } else {
                console.error("Failed to delete item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <section className="section cartpage">
            <div className="container">
                <h2 className="hd">Your Cart</h2>
                <p>There are <b>{cartItems.length}</b> products in your cart</p>
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
                                    {cartItems.map(item => (
                                        <tr key={item._id}>
                                            <td width="35%">
                                                <Link to={`/product/${item.productid}`}>
                                                    <div className="d-flex align-items-center cartimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src={item.image} alt={item.producttitle} className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>{item.producttitle}</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">${item.price}</td>
                                            <td width="25%">
                                                <Quantitybox
                                                    quantity={item.quantity}
                                                    onQuantityChange={(newQuantity) => handleQuantityChange(item._id, newQuantity)}
                                                />
                                            </td>
                                            <td width="15%">${item.total.toFixed(2)}</td>
                                            <td width="10%">
                                                <span className="remove" onClick={() => handleDelete(item._id)}>
                                                    <MdOutlineDeleteOutline />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border p-3 carttotal">
                            <h4>CART TOTALS</h4>
                            <div className="d-flex align-items-center mt-3 mb-3">
                                <span>Subtotal </span>
                                <span className="ml-auto text-red">${subTotal}</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Shipping </span>
                                <span className="ml-auto"><b>Free</b></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Country </span>
                                <span className="ml-auto"><b>India</b></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Total </span>
                                <span className="ml-auto">${subTotal}</span>
                            </div>

                            <button className="add-to-cart">Add to cart <FaCartShopping /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
