// src/components/AboutAndSkills.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Code2, Server, Shield, Wrench } from 'lucide-react';

export default function AboutAndSkills() {
  // En ajoutant ": Variants", TypeScript sait exactement comment valider "easeOut"
  const scrollVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-blue-500 w-6 h-6" />,
      skills: ["HTML / CSS", "JavaScript", "React"]
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-500 w-6 h-6" />,
      skills: ["Node.js", "Python", "MySQL / SQL"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="text-cyan-500 w-6 h-6" />,
      skills: ["Wireshark", "Network Security", "VLANs", "CIRT"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-emerald-500 w-6 h-6" />,
      skills: ["Git", "Figma", "VS Code", "Linux"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full space-y-24">
      
      {/* SECTION ABOUT ME */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={scrollVariants}
      >
        {/* Texte principal gauche */}
        <div className="md:col-span-2 space-y-6">
          <span className="text-purple-500 font-mono text-sm tracking-wider">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Building the Future of Secure Web
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Je suis un développeur passionné par la création d'applications web modernes et la sécurisation des systèmes réseaux. Allier le développement et la cybersécurité me permet de concevoir des solutions robustes, fiables et performantes dès leur conception.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Actuellement en quête d'opportunités pour mettre mes compétences en pratique, j'aime relever des défis techniques, optimiser les architectures et auditer la sécurité des infrastructures numériques.
          </p>
        </div>

        {/* Blocs Éducation & Objectifs à droite */}
        <div className="space-y-6">
          <div className="p-6 bg-card border border-border rounded-xl space-y-2">
            <h3 className="text-white font-semibold text-lg">Education</h3>
            <p className="text-blue-400 text-sm font-medium">BTS en Informatique & Sécurité</p>
            <p className="text-slate-500 text-xs">Spécialisation Systèmes et Réseaux</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl space-y-2">
            <h3 className="text-white font-semibold text-lg">Career Objective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Contribuer activement à la protection des actifs numériques tout en développant des outils web innovants et hautement sécurisés.
            </p>
          </div>
        </div>
      </motion.div>

      {/* SECTION TECHNOLOGIES & TOOLS */}
      <div className="space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scrollVariants}
          className="space-y-2"
        >
          <span className="text-blue-500 font-mono text-sm tracking-wider">// TECHNICAL STACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies & Tools</h2>
        </motion.div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            // Création d'un objet de variants typé à la volée pour les cartes enfants
            const cardVariants: Variants = {
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.4, delay: idx * 0.05, ease: "easeOut" } 
              }
            };

            return (
              <motion.div
                key={idx}
                className="p-6 bg-card border border-border rounded-xl space-y-4 hover:border-blue-500/50 transition-all group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-slate-400">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 group-hover:text-slate-300 transition-colors">
                      <span className="text-blue-500/70">&bull;</span> {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}