import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-light py-5">
        <div className="container text-center">
          <motion.h1
            className="display-3 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We are passionate photographers dedicated to capturing the essence of life through the lens.
          </motion.p>
        </div>
      </section>

      {/* About the Company Section */}
      <section className="about-company py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="lead text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Founded in 2010, our photography studio has been capturing beautiful moments for over a decade. Our team of experts is committed to providing high-quality, creative, and customized photography services for all types of events.
          </motion.p>
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Whether it's a wedding, corporate event, or a personal photoshoot, we strive to preserve memories that will last a lifetime. Our approach blends technical expertise with artistic vision, ensuring that every shot tells a unique story.
          </motion.p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-light py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet the Team
          </motion.h2>
          <div className="row text-center">
            {/* Team Member 1 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://cdn.pixabay.com/photo/2023/01/12/08/25/man-7713605_1280.jpg"
                  alt="John Doe"
                  className="card-img-top rounded-circle"
                  style={{ width: '150px', height: '150px', margin: '0 auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Lead Photographer</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    John is the heart and soul of our photography team. With over 15 years of experience, he has a keen eye for capturing unforgettable moments. His passion for photography goes beyond taking pictures—he strives to tell stories through every shot.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/OIP.Z4zmDGPbtujXjMytB3hu8AHaHa?rs=1&pid=ImgDetMaing"
                  alt="Jane Smith"
                  className="card-img-top rounded-circle"
                  style={{ width: '150px', height: '150px', margin: '0 auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Photography Assistant</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Jane works closely with John to ensure every shot is perfect. She assists in lighting, camera settings, and editing. Jane’s attention to detail and dedication to excellence makes her an invaluable part of the team.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://cdn5.vectorstock.com/i/1000x1000/61/44/avatar-business-woman-graphic-vector-9646144.jpg"
                  alt="Emily Johnson"
                  className="card-img-top rounded-circle"
                  style={{ width: '150px', height: '150px', margin: '0 auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Emily Johnson</h5>
                  <p className="card-text">Creative Director</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Emily’s creative vision guides the artistic direction of our shoots. She ensures that each session reflects the client's personality and style, and her expertise in editing brings out the best in every image.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="lead text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            At our studio, we believe in the power of photography to preserve memories, tell stories, and connect people. Our mission is to provide creative and personalized photography services that exceed expectations and create lasting impressions.
          </motion.p>
        </div>
      </section>

      {/* Photography Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/OIP.FgrH6pk3Q3UG-rga9eflfQDYEg?rs=1&pid=ImgDetMain"
                  alt="Portrait Photography"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Portrait Photography</h5>
                  <p className="card-text">
                    Create lasting portraits that capture your personality and style.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/OIP.uoPbBSz8YFLw52nzSzUwcgHaE7?rs=1&pid=ImgDetMain"
                  alt="Event Photography"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Event Photography</h5>
                  <p className="card-text">
                    Capture every detail of your event with professional, candid shots.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://www.vibrantbrands.com/wp-content/uploads/2023/05/commercial-photo-header.png"
                  alt="Commercial Photography"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Commercial Photography</h5>
                  <p className="card-text">
                    Professional photos for your business needs, including product and branding shots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections... */}
    </div>
  );
};

export default About;
