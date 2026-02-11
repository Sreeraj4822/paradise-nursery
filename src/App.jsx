import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>
      {!showProducts && (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            We offer a wide variety of beautiful indoor plants to brighten your home.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
          <AboutUs />
        </div>
      )}

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;