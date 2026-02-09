import { useState } from 'react'
import './App.css'

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
  <div style={{ padding: "40px", textAlign: "center" }}>
  {!showProducts ? (
    <>
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful indoor plants 🌿</p>
      <button
        onClick={() => setShowProducts(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </>
  ) : (
    <h1>Product Listing Page Coming Soon 🌱</h1>
  )}
</div>
);
}

export default App;
