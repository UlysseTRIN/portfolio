// src/pages/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const projectsData = [
  {
    id: 1,
    title: "Cancer Detection Challenge",
    description: (
      <>
        <p>
          Challenge Data – OWKIN : Détection de mutation PIK3CA dans le cancer du sein. Ce challenge consiste à prédire la présence de mutations sur des images histopathologiques en utilisant une approche weakly-supervised (Multiple Instance Learning).
        </p>
      </>
    ),
    detailedDescription: (
      <>
        <p>
          Dans ce challenge, l'objectif est de détecter la mutation PIK3CA dans des images issues d'échantillons histopathologiques. Pour ce faire, chaque lame est divisée en jusqu'à 1 000 tuiles de 224x224 pixels, et un algorithme de Multiple Instance Learning est appliqué afin de prédire la présence de mutation à partir de l'analyse collective des tuiles.
        </p>
        <p>
          Cette approche permet de contourner la contrainte de l'annotation locale et de se concentrer sur une étiquette globale par échantillon, rendant ainsi l'analyse plus efficace. Le challenge a mis en lumière l'importance des techniques de weak supervision pour l'analyse d'images de grande dimension.
        </p>
      </>
    ),
    image: "/owkin.png", // Placer l'image dans le dossier public
    gitLink: "https://github.com/matteo-st/ens-data-challenge",
    category: "IA"
  },
  {
    id: 2,
    title: "Building Claim Prediction",
    description: (
      <p>
        Développement d'un algorithme de reconnaissance pour prédire les réclamations dans le secteur immobilier. Le modèle exploite des fondements du machine learning afin d'analyser les données et fournir des prédictions fiables.
      </p>
    ),
    detailedDescription: (
      <p>
        Ce projet repose sur la création d'un modèle de classification pour prédire la survenue de réclamations. En exploitant des techniques avancées d'analyse de données, l'algorithme vise à optimiser la gestion des sinistres dans le secteur immobilier.
      </p>
    ),
    image: "/Generali.jpg", // Placer l'image dans le dossier public
    gitLink: "https://github.com/UlysseTRIN/building-claim-ens",
    category: "Data"
  },
  // D'autres projets peuvent être ajoutés ici.
];

const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = filter === 'Tous'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
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
        Mes Projets
      </motion.h2>
      <div className="text-center mb-4">
        <button 
          className="btn mx-2" 
          style={{ backgroundColor: '#222222', color: '#FFFFFF' }} 
          onClick={() => setFilter('Tous')}
        >
          Tous
        </button>
        <button 
          className="btn mx-2" 
          style={{ backgroundColor: '#222222', color: '#FFFFFF' }} 
          onClick={() => setFilter('IA')}
        >
          IA
        </button>
        <button 
          className="btn mx-2" 
          style={{ backgroundColor: '#222222', color: '#FFFFFF' }} 
          onClick={() => setFilter('Data')}
        >
          Data
        </button>
      </div>
      <div className="row">
        {filteredProjects.map(project => (
          <div className="col-md-6 mb-4" key={project.id}>
            <Card 
              title={project.title} 
              description={project.description} 
              image={project.image}
              gitLink={project.gitLink}
            >
              {expandedProject === project.id && (
                <div style={{ marginTop: "1rem", color: "#333333", fontSize: "0.95rem" }}>
                  {project.detailedDescription}
                </div>
              )}
              <button
                onClick={() => toggleExpand(project.id)}
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#222222",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                {expandedProject === project.id ? "Voir moins" : "Voir plus"}
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
