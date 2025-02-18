import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    id: 1,
    name: "Product One",
    description: "This is the first product with detailed information.",
    price: "$20",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is the second product with detailed information.",
    price: "$30",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product Three",
    description: "This is the third product with detailed information.",
    price: "$40",
    image: "https://via.placeholder.com/300",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.description}</p>
          <h4 className="text-primary">{product.price}</h4>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
