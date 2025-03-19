// src/pages/CV.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Alternant Chef de Projet IA, IT",
    company: "Sounduct, Paris",
    period: "2023 - 2026",
    presentation:
      "Sounduct est une start-up française spécialisée dans le développement de solutions auditives innovantes. Fondée en 2021 par Jean-Philippe Marie de Chastenay et Olivier Gauthier, l'entreprise se consacre à la conception d'aides auditives à conduction osseuse, notamment le dispositif Ossiclear, destiné à améliorer l'audition des personnes malentendantes.",
    missions: [
      "Conception et développement d’algorithmes pour la séparation binaurale de sources sonores, permettant d'isoler efficacement les différentes composantes d'un signal audio.",
      "Implémentation de réseaux neuronaux causaux pour l'extraction en temps réel des cibles audio tout en préservant leurs indices spatiaux, assurant ainsi une expérience auditive naturelle.",
      "Développement d'applications collaboratives, incluant un chatbot RAG, pour améliorer la communication et la productivité des équipes.",
      "Déploiement et maintenance de solutions de sécurité informatique sur la plateforme Microsoft, garantissant la protection des données et le respect des normes en vigueur.",
      "Rédaction de documents de cybersécurité conformes aux exigences FDA."
    ],
    competencies:
      "Maîtrise des techniques d'apprentissage automatique appliquées au traitement du signal audio, développement d'applications collaboratives, expertise en sécurité informatique et conformité réglementaire."
  },
  {
    id: 2,
    title: "Stage de Contrôle Financier",
    company: "Bouygues Travaux Publics, Paris",
    period: "2022 (2 mois)",
    presentation:
      "Bouygues Travaux Publics est une filiale du groupe Bouygues, spécialisée dans les grands projets d'infrastructures et de génie civil à l'échelle internationale.",
    missions: [
      "Développement d’un outil digital pour analyser les flux financiers, facilitant le suivi et l’analyse des transactions.",
      "Standardisation des données afin d'améliorer le suivi des coûts et la prise de décision."
    ],
    competencies:
      "Analyse financière, développement d'outils numériques et optimisation des processus de suivi des coûts."
  },
  {
    id: 3,
    title: "Stagiaire Data Scientist",
    company: "Impiere, Bordeaux",
    period: "2022 (2 mois)",
    presentation:
      "Impiere est une entreprise spécialisée dans l'application de la science des données à divers domaines, notamment la santé et la biotechnologie.",
    missions: [
      "Réalisation d'analyses en Python pour identifier des corrélations lors des processus de fécondation in vitro, permettant d'améliorer la compréhension des facteurs influençant le succès des procédures."
    ],
    competencies:
      "Analyse de données médicales, programmation en Python et application de modèles statistiques pour l'identification de corrélations significatives."
  }
];

const formations = [
  {
    id: 1,
    title: "MSc Professionnel en Intelligence Artificielle",
    institution: "EPITECH, Paris",
    period: "2023 - 2026",
    details: [
      "EPITECH, membre du Groupe IONIS, est réputée pour son approche innovante de l'enseignement informatique, axée sur la pratique et l'expertise technique. Le MSc couvre des domaines tels que l'apprentissage profond, le traitement du langage naturel, la vision par ordinateur, les transformers et les statistiques.",
      "Participation à des projets concrets : développement d'algorithmes d'apprentissage automatique pour la reconnaissance de patterns dans des données complexes et création de chatbots avancés.",
      "Compétences acquises : maîtrise de frameworks comme TensorFlow et PyTorch, programmation avancée (Python) et implémentation de solutions IA en milieu professionnel."
    ]
  },
  {
    id: 2,
    title: "Cours d’IA Avancée",
    institution: "CNAM, Paris",
    period: "Janvier - Juillet 2023",
    details: [
      "Approfondissement des techniques d'apprentissage par renforcement avec une focalisation sur leurs applications pratiques.",
      "Développement d'un algorithme de résumé vidéo utilisant l'apprentissage par renforcement pour synthétiser des contenus tout en préservant les informations essentielles.",
      "Compétences développées : modélisation d'environnements complexes pour l'apprentissage par renforcement et optimisation des politiques d'agents intelligents."
    ]
  },
  {
    id: 3,
    title: "Cours de Science des Données",
    institution: "Collège de France, Paris",
    period: "Janvier - Mars 2023",
    details: [
      "Participation à des compétitions telles que l'ENS Data Challenge, avec une première place pour la détection du cancer et une deuxième place pour la prédiction de sinistres dans le bâtiment.",
      "Compétences développées : analyse de données massives, modélisation statistique avancée, utilisation d'outils comme R et Python pour l'analyse prédictive, et travail collaboratif sur des projets de data science."
    ]
  },
  {
    id: 4,
    title: "Bachelor en Management",
    institution: "EM Lyon Business School, Paris",
    period: "2022 - 2023",
    details: [
      "Modules étudiés : stratégie d'entreprise, gestion financière, entrepreneuriat, consulting, marketing et ressources humaines.",
      "Compétences développées : leadership, prise de décision stratégique, gestion de projet, communication efficace et travail en équipe multiculturelle."
    ]
  },
  {
    id: 5,
    title: "Licence en Mathématiques, Informatique, Finance",
    institution: "Université Paris-Dauphine (PSL)",
    period: "2018 - 2022",
    details: [
      "Cours principaux : analyse mathématique, programmation (Python), statistiques, probabilités, méthodes numériques et finance de marché.",
      "Projet académique : modélisation des interactions d'un réseau social via Python.",
      "Compétences techniques : maîtrise des langages de programmation, développement d'algorithmes et résolution de problèmes complexes en mathématiques et informatique."
    ]
  },
  {
    id: 6,
    title: "Baccalauréat Scientifique",
    institution: "Lycée Louis Le Grand",
    period: "2018",
    details: [
      "Spécialisation : Mathématiques.",
      "Activités parascolaires : participation à des clubs scientifiques, olympiades de mathématiques, projets de recherche en physique et organisation de conférences.",
      "Distinctions : Mention Bien et prix d'excellence en mathématiques et physique."
    ]
  }
];

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div 
      className="card-custom mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "1.5rem",
        border: "1px solid #eaeaea",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF"
      }}
    >
      <h4 style={{ color: "#222222", fontFamily: "Montserrat, sans-serif" }}>
        {experience.title} – <span style={{ fontWeight: "normal" }}>{experience.company}</span>
      </h4>
      <p style={{ fontStyle: "italic", color: "#555555" }}>{experience.period}</p>
      <p style={{ color: "#333333" }}>{experience.presentation}</p>
      <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", color: "#333333" }}>
        {(expanded ? experience.missions : experience.missions.slice(0, 2)).map((mission, idx) => (
          <li key={idx}>{mission}</li>
        ))}
      </ul>
      {expanded && (
        <p style={{ color: "#333333", marginTop: "0.5rem" }}>
          <strong>Compétences développées :</strong> {experience.competencies}
        </p>
      )}
      {experience.missions.length > 2 && (
        <button 
          onClick={() => setExpanded(!expanded)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#222222",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "0.5rem"
          }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </motion.div>
  );
};

const FormationCard = ({ formation }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div 
      className="card-custom mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "1.5rem",
        border: "1px solid #eaeaea",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF"
      }}
    >
      <h4 style={{ color: "#222222", fontFamily: "Montserrat, sans-serif" }}>
        {formation.title} – <span style={{ fontWeight: "normal" }}>{formation.institution}</span>
      </h4>
      <p style={{ fontStyle: "italic", color: "#555555" }}>{formation.period}</p>
      <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", color: "#333333" }}>
        {(expanded ? formation.details : formation.details.slice(0, 1)).map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
      {formation.details.length > 1 && (
        <button 
          onClick={() => setExpanded(!expanded)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#222222",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "0.5rem"
          }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </motion.div>
  );
};

const CV = () => {
  return (
    <div className="container mt-5">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="text-center mb-4"
        style={{ color: "#222222" }}
      >
        Mon Parcours
      </motion.h2>
      <div className="row" style={{ position: "relative" }}>
        {/* Expérience Professionnelle */}
        <div className="col-12 col-md-6">
          <h3 style={{ color: "#222222" }}>Expérience Professionnelle</h3>
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
        {/* Formation */}
        <div className="col-12 col-md-6">
          <h3 style={{ color: "#222222" }}>Formation</h3>
          {formations.map(form => (
            <FormationCard key={form.id} formation={form} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
