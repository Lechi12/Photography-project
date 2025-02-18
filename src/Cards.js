import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Service One</h5>
              <p className="card-text">Description of service one.</p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Service Two</h5>
              <p className="card-text">Description of service two.</p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Service Three</h5>
              <p className="card-text">Description of service three.</p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
