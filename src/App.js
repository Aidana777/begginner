import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/Shop/Shop'
import { Cart } from './pages/Cart/Cart'
import Contact from "./pages/Contact";
import { Login } from './pages/Login/Login';
import { ShopContextProvider } from "./context/shop-context";
import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login"element={<Login setIsLoggedIn={setIsLoggedIn}/>}
            />
          </Routes>

        </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
