import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Listing from './Pages/Listing';
import Productdetails from './Pages/Listing/Productdetails';
import Cart from './Pages/Cart';
import Signin from './Pages/Signin';
import { useState,createContext } from 'react';
// import { Details } from '@mui/icons-material';


export const MyContext = createContext();

function App() {
  const [isheaderfootershow, setisheaderfootershow] = useState(true);

  // Pass an object as the value to MyContext.Provider
  const contextValue = {
    isheaderfootershow,
    setisheaderfootershow,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={contextValue}>
        {isheaderfootershow && <Header />}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cat/:id" exact element={<Listing />} />
          <Route path="/product/:id" exact element={<Productdetails />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/signin" exact element={<Signin />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;