// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, gitLink, children }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="card-custom"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #eaeaea",
        borderRadius: "8px",
        padding: "1.5rem"
      }}
    >
      {image && (
        gitLink ? (
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <img 
              src={image} 
              alt={title} 
              className="card-img" 
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
                marginBottom: "1rem"
              }}
            />
          </a>
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="card-img" 
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "1rem"
            }}
          />
        )
      )}
      <h4 style={{ color: "#222222", fontFamily: "Montserrat, sans-serif" }}>
        {title}
      </h4>
      <div style={{ color: "#333333", marginBottom: "1rem" }}>
        {description}
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
