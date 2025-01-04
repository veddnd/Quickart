import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from './Pages/Listing';
import Productdetails from './Pages/Listing/Productdetails';
import Cart from './Pages/Cart';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { useState, createContext, useEffect } from 'react';

export const MyContext = createContext();

function App() {
    const [isheaderfootershow, setisheaderfootershow] = useState(true);
    const [islogin, setislogin] = useState(false);
    const [userId, setUserId] = useState(null);
    const [cartdata, setcartdata] = useState([]);
    const [alertBox, setAlertBox] = useState({
        open: false,
        success: false,
        error: false,
        msg: '',
    });

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        
        if (token) {
            setislogin(true);
            // Example: Assuming userId is stored in sessionStorage or derived from the token
            const userid= sessionStorage.getItem('userId');
            setUserId(userid);
        } else {
            setislogin(false);
            setUserId(null); // Clear userId if not logged in
        }
    }, []);
    

    const addTocart = (product) => {
        setcartdata((prev) => [...prev, product]); // Add product to cart
        setAlertBox({
            open: true,
            success: true,
            error: false,
            msg: `${product.producttitle} added to cart successfully!`,
        });
    };

    const contextValue = {
        isheaderfootershow,
        setisheaderfootershow,
        islogin,
        setislogin,
        alertBox,
        setAlertBox,
        addTocart,
        cartdata,
        setcartdata,
        userId,
        setUserId
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={contextValue}>
                {isheaderfootershow && <Header />}
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/cat" exact element={<Listing />} />
                    <Route path="/product/:id" exact element={<Productdetails />} />
                    <Route path="/newarrivals/:id" exact element={<Productdetails />} />
                    <Route path="/cart" exact element={<Cart />} />
                    <Route path="/signin" exact element={<Signin />} />
                    <Route path="/signup" exact element={<Signup />} />
                </Routes>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
