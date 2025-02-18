import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page d-flex justify-content-center align-items-center vh-100">
      <div className="contact-container p-5 rounded">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
        <div className="social-icons d-flex justify-content-center mt-4">
        <button className="mx-2"><FaInstagram size={30} /></button>
        <button className="mx-2"><FaFacebook size={30} /></button>
        <button className="mx-2"><FaTwitter size={30} /></button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
