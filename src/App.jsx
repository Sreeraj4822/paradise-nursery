import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowLanding(false);
    setShowProducts(true);
    setShowCart(false);
  };

  const handleShowProducts = () => {
    setShowLanding(false);
    setShowProducts(true);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowLanding(false);
    setShowProducts(false);
    setShowCart(true);
  };

  return (
    <div>
      {/* NAVBAR */}
      {!showLanding && (
        <nav className="navbar">
          <h2 onClick={handleShowProducts} style={{ cursor: "pointer" }}>
            Paradise Nursery
          </h2>
          <div>
            <button onClick={handleShowProducts}>Plants</button>
            <button onClick={handleShowCart}>Cart</button>
          </div>
        </nav>
      )}

      {/* LANDING PAGE */}
      {showLanding && (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            We bring nature closer to your home with a wide variety of indoor
            and decorative plants.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      )}

      {/* PRODUCT PAGE */}
      {showProducts && <ProductList />}

      {/* CART PAGE */}
      {showCart && <CartItem onContinueShopping={handleShowProducts} />}

      {/* ABOUT US SECTION */}
      {showLanding && <AboutUs />}
    </div>
  );
}

export default App;