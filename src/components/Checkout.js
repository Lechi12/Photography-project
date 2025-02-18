import React, { useState } from "react";
import { useCart } from "../context/CartContext"; 
 // Corrected path
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Checkout = () => {
  const { cart } = useCart(); // Get cart from context
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.replace('$', ''));
  }, 0);

  const handleCheckout = () => {
    if (!name || !address) {
      alert("Please fill in your details.");
      return;
    }

    // Navigate to confirmation page with cart details and total price
    navigate("/confirmation", { state: { cart, totalPrice, name, address } });
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            <div className="mt-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button className="btn btn-success mt-2" onClick={handleCheckout}>
                Complete Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
