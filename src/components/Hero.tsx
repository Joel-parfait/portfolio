// src/components/Hero.tsx
'use client'; 

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Fonction pour gérer le défilement fluide vers les projets
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-24 overflow-hidden w-full">
      {/* Grille de fond subtile */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Partie Gauche : Texte */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="text-secondary text-sm font-mono tracking-wider text-purple-400">
            // SALUT, JE SUIS
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-white">Joel Parfait</span>{' '}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              TCHUENTE KENMEGNE
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 font-semibold">
            Web Developer & Network Security Student
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-slate-400 max-w-md text-sm md:text-base">
            Passionné par la création d'applications web modernes et la sécurisation des systèmes.
          </motion.p>

          {/* Boutons / Liens ajustés */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            {/* Lien vers la section Projets */}
            <a 
              href="#projects" 
              onClick={handleScrollToProjects}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium text-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Voir Projets
            </a>

            {/* Lien vers ton CV PDF (S'ouvre sur la même page) */}
            <a 
              href="/cv-joel-tchuente.pdf" 
              className="px-6 py-3 bg-slate-900 border border-slate-800 text-white rounded-md font-medium text-center hover:bg-slate-850 transition-colors cursor-pointer"
            >
              Mon CV &rarr;
            </a>
          </motion.div>
        </div>

        {/* Partie Droite : Emplacement Photo */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center md:justify-end"
          whileHover={{ scale: 1.02 }}
        >
          {/* Cadre effet Cyber pour la photo */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 border border-blue-500/30 rounded-2xl p-4 bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-blue-500/10 flex items-center justify-center">
            <div className="absolute inset-0 border border-purple-500/20 rounded-2xl rotate-3 pointer-events-none"></div>
            <span className="text-slate-500 font-mono text-xs">[ Emplacement Photo ]</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}