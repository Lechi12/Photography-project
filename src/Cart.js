import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useCart } from "./context/CartContext"; // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart function

  // Log cart contents for debugging
  console.log("Cart contents:", cart);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.replace('$', ''));
  }, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item.name} - {item.price}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)} // Trigger remove function
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            <Link to="/checkout" className="btn btn-success mt-2">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
