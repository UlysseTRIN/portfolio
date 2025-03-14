// src/pages/Home.jsx
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "typed.js"; // Utilisation de typed.js pour l'effet de texte animé

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Machine Learning", "Sécurité IT", "Développement Web"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container text-center hero-section">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image de profil avec positionnement optimal */}
        <img
          src="/IMG_5138.PNG"
          alt="Photo de profil"
          className="rounded-circle"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            objectPosition: "50% 25%", // Positionnement pour mettre en avant le haut de la photo
            border: "2px solid #222222",
            marginBottom: "1.5rem",
          }}
        />

        {/* Nom et titre */}
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "#222222",
          }}
        >
          Ulysse Trin
        </h1>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "1rem",
            color: "#555555",
          }}
        >
          Développeur IA, Web & Cybersécurité
        </h2>

        {/* Texte animé */}
        <div style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#222222" }}>
          <span ref={typedElement}></span>
        </div>

        {/* Bouton vers le CV */}
        <Link
          to="/cv"
          className="btn btn-lg"
          style={{
            backgroundColor: "#222222",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
          }}
        >
          Découvrez mon CV
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
