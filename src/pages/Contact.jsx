// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Remplacez "/api/send-email" par l'URL de votre fonction serverless.
      // Par exemple, avec Netlify, l'endpoint est généralement : /.netlify/functions/send-email
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ nom: '', email: '', message: '' });
      } else {
        alert('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'envoi du message.');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
        style={{ color: '#222222' }}
      >
        Contactez-moi
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label htmlFor="nom" className="form-label" style={{ color: "#222222" }}>Nom</label>
          <input 
            type="text" 
            className="form-control" 
            id="nom" 
            name="nom" 
            onChange={handleChange} 
            value={formData.nom}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: "#222222" }}>Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            onChange={handleChange} 
            value={formData.email}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label" style={{ color: "#222222" }}>Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message" 
            rows="4" 
            onChange={handleChange} 
            value={formData.message}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-lg w-100" 
          style={{ backgroundColor: '#222222', color: '#FFFFFF' }}
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
