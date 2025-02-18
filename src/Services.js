import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  { 
    id: 1, 
    name: "Portrait Photography", 
    description: "Capture your beautiful moments with a professional portrait session, whether for personal or professional purposes.", 
    image: "https://th.bing.com/th/id/OIP.zsoWYhUw5r54Pt2LZ9g-gAHaLH?rs=1&pid=ImgDetMain" 
  },
  { 
    id: 2, 
    name: "Event Photography", 
    description: "Ideal for any event, big or small. We'll capture the essence of your event, whether it's a wedding, party, or corporate gathering.", 
    image: "https://th.bing.com/th/id/OIP.2LiiB7vAx1aGwD7brcEf-AHaE8?rs=1&pid=ImgDetMain" 
  },
  { 
    id: 3, 
    name: "Commercial Photography", 
    description: "Perfect for your business needs. We'll create eye-catching imagery that enhances your brand, product, and services.", 
    image: "https://www.vibrantbrands.com/wp-content/uploads/2023/05/commercial-photo-header.png" 
  },
  { 
    id: 4, 
    name: "Photo Editing & Retouching", 
    description: "High-end retouching and color grading to bring out the best in your photos.", 
    image: "https://th.bing.com/th/id/R.2410164c85e93e648ecaef17e66e6fac?rik=QdFUeYLm70VsjQ&pid=ImgRaw&r=0" 
  },
  { 
    id: 5, 
    name: "Drone Photography", 
    description: "Capture breathtaking aerial shots for real estate, events, and marketing.", 
    image: "https://wp-modula.com/wp-content/uploads/2019/05/drone-photography-1.jpg" 
  },
  { 
    id: 6, 
    name: "Corporate Headshots", 
    description: "Professional headshots for LinkedIn, company profiles, and branding.", 
    image: "https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_007.jpg" 
  }
];

const Services = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-5">Our Photography Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="col-md-4 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}  // Starts small and invisible
            animate={{ scale: 1, opacity: 1 }}  // Grows to full size
            transition={{ 
              delay: index * 0.3,  // Stagger effect
              duration: 0.8, 
              ease: "easeOut", 
              type: "spring", // Adds a bounce effect
              stiffness: 100 
            }} 
          >
            <div className="card shadow-lg">
              <motion.img
                src={service.image}
                className="card-img-top"
                alt={service.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
