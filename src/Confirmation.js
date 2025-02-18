import React from "react";
import { useLocation, Link } from "react-router-dom"; // Use useLocation to get passed state

const Confirmation = () => {
  const location = useLocation(); // Get the state passed from Checkout
  const { cart, totalPrice, name, address } = location.state || {}; // Destructure data
  
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Order Confirmation</h2>
      <div className="alert alert-success p-4">
        <h4>Thank you for your order, {name}!</h4>
        <p>Your order has been successfully placed. You will receive an email confirmation shortly.</p>
        <p>We are processing your order and will notify you once it's ready to ship to: {address}</p>
      </div>
      
      <div>
        <h5>Order Summary:</h5>
        <ul className="list-group mb-4">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <h5>Total: ${totalPrice.toFixed(2)}</h5>
      </div>

      <div className="mt-4">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/products" className="btn btn-secondary ms-3">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Confirmation;
