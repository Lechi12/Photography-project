import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Import Bootstrap JS

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";  // Import Navigation
import Products from "./Products";  // Import Products Component
import ProductDetails from "./ProductDetails";  // Import ProductDetails Component
import Cart from "./Cart";  // Import the new Cart component
import Checkout from "./components/Checkout";  // ✅ Correct path
import Confirmation from "./Confirmation";  // Import Confirmation Component
import { CartProvider } from "./context/CartContext";  // Adjust the import path
import './styles.css';  // Add this line
import './App.css';

// Import all pages
import Home from "./Home";
import About from "./About";
import Contact from "./components/Contact";
import Services from "./Services";

function App() {
  return (
    <CartProvider> {/* Wrap the entire Router inside CartProvider */}
      <Router>
        <Navigation /> {/* Use Navigation Component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
          <Route path="/checkout" element={<Checkout />} /> {/* Checkout Route */}
          <Route path="/confirmation" element={<Confirmation />} /> {/* Confirmation Route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
