import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div>
    
      {/* Hero Section */}
      <motion.div
        className="hero-section text-center text-light d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1315376423/photo/photographer-taking-pictures-of-a-couple-in-love.jpg?s=612x612&w=is&k=20&c=6zxMCpwECrG9RP6TgGiUkYX3p6Fzbo3uy9OtseDiA-0=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          padding: "5rem 0",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        <motion.h1
          className="display-4 mb-3"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          Capturing Moments, Creating Memories.
        </motion.h1>
        <motion.p
          className="lead mb-4"
          style={{ fontSize: "1.5rem", fontWeight: "lighter", position: "relative", zIndex: 2 }}
        >
          Welcome to our Photography Services Web App. Explore creative, high-quality photography for any occasion.
        </motion.p>
        <Link to="/services">
          <motion.button
            className="btn btn-light btn-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ position: "relative", zIndex: 2 }}
          >
            Discover Our Services
          </motion.button>
        </Link>
      </motion.div>

      {/* About Us Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-8 mx-auto">
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              We are passionate photographers with years of experience. Our goal is to create memorable experiences by capturing the most beautiful moments in your life. We believe every photograph tells a unique story.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            To inspire people through creative photography that captures emotions, connections, and timeless memories. We aim to deliver the highest quality service and experience to our clients.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-5">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://www.fazackarley.com/wp-content/uploads/2020/01/bath-wedding-photographer-6-1.jpg"
              alt="Wedding Photography"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.SbqaA7UFnMtdOv773Z_y1AHaHa?rs=1&pid=ImgDetMain"
              alt="Food Photography"
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://i.pinimg.com/originals/5e/fa/88/5efa8805197c2f6013c79d17e66c01ac.jpg"
              alt="Corporate Photography"
              className="img-fluid mb-4"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-dark text-light py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center bg-light">
                <div className="card-body">
                  <p className="card-text">
                    "The portraits were beyond our expectations. You truly captured our essence!"
                  </p>
                  <footer className="blockquote-footer">Jessica & John</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center bg-light">
                <div className="card-body">
                  <p className="card-text">
                    "Incredible event photography. We will cherish these photos forever!"
                  </p>
                  <footer className="blockquote-footer">Emily & Mark</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center bg-light">
                <div className="card-body">
                  <p className="card-text">
                    "The commercial photos were exactly what we needed for our branding!"
                  </p>
                  <footer className="blockquote-footer">Vibrant Brands</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container text-center py-5">
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to make memories? Contact us today and let’s get started!
        </motion.p>
        <Link to="/contact">
          <motion.button
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
