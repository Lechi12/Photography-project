import React from "react";
import { motion } from "framer-motion";
import { useCart } from "./context/CartContext"; // Import useCart hook
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { id: 1, name: "Portrait Photography", description: "Capture your beautiful moments.", price: "$20", image: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=is&k=20&c=aJ_aDoCLFOZAIupaQS5wFtqNNUgWoiqbEap1op-Ez5g=" },
  { id: 2, name: "Event Photography", description: "Ideal for any event, big or small.", price: "$30", image: "https://media.istockphoto.com/id/1480245214/photo/cameraman-shooting-with-professional-camera.jpg?s=612x612&w=is&k=20&c=cixmyMV-dc1RKHm0iNnS8jqACLGNuO_KBbvEGlAqY3c=" },
  { id: 3, name: "Commercial Photography", description: "Perfect for your business and marketing.", price: "$40", image: "https://www.vibrantbrands.com/wp-content/uploads/2023/05/commercial-photo-header.png" },
];


const Products = () => {
  const { addToCart } = useCart(); // Get addToCart function

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="card mb-4"
              whileHover={{ scale: 1.05 }}  // Slightly enlarge the card on hover
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                whileHover={{ scale: 1.1 }} // Zoom in image on hover
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}</strong></p>
                <motion.button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }} // Grow and change color on hover
                  whileTap={{ scale: 0.95 }} // Slight shrink effect on tap/click
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
