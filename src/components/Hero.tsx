// src/components/Hero.tsx
'use client'; 

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

export default function Hero() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  const photos = [
    '/photo1.jpg', '/photo2.jpg', '/photo3.jpg', '/photo4.jpg', '/photo5.jpg',
    '/photo6.jpg', '/photo7.jpg', '/photo8.jpg', '/photo9.jpg', '/photo10.jpg',
    '/photo11.jpg', '/photo12.jpg', '/photo13.jpg', '/photo14.jpg', '/photo15.jpg',
    '/photo16.jpg', '/photo17.jpg', '/photo18.jpg', '/photo19.jpg', '/photo20.jpg',
    '/photo21.jpg', '/photo22.jpg', '/photo23.jpg', '/photo24.jpg', '/photo25.jpg',
    '/photo26.jpg', '/photo27.jpg', '/photo28.jpg','/photo28.jpg', '/photo29.jpg', 
    '/photo30.jpg', '/photo31.jpg', '/photo32.jpg', '/photo33.jpg', '/photo34.jpg',
     '/photo35.jpg'
  ];

  // On extrait les 3 premières photos pour créer la pile visuelle statique sur le Hero
  const previewPhotos = photos.slice(0, 3);

  // Rotations et décalages appliqués par défaut à chaque niveau de la pile
  const stackConfig = [
    { rotate: 0, x: 0, y: 0, zIndex: 30 },     // Photo du dessus
    { rotate: -6, x: -15, y: 5, zIndex: 20 },   // Milieu
    { rotate: 6, x: 15, y: -5, zIndex: 10 },    // Dessous
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-24 overflow-hidden w-full">
      {/* Grille de fond subtile */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10"
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

          {/* Boutons / Liens */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              onClick={handleScrollToProjects}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium text-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Voir Projets
            </a>

            <a 
              href="/cv-joel-tchuente.pdf" 
              className="px-6 py-3 bg-slate-900 border border-slate-800 text-white rounded-md font-medium text-center hover:bg-slate-850 transition-colors cursor-pointer"
            >
              Mon CV &rarr;
            </a>
          </motion.div>
        </div>

        {/* Partie Droite : Pile d'images empilées et rotées (Stacked Deck) */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center h-[350px] md:h-[450px] w-full"
        >
          <motion.div 
            onClick={() => setIsGalleryOpen(true)}
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group"
            initial="rest"
            whileHover="hover"
          >
            {previewPhotos.map((src, idx) => {
              const config = stackConfig[idx] || stackConfig[0];
              return (
                <motion.div
                  key={idx}
                  className="absolute inset-0 border border-blue-500/30 rounded-2xl p-2 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden flex items-center justify-center"
                  style={{ zIndex: config.zIndex }}
                  variants={{
                    rest: { 
                      rotate: config.rotate, 
                      x: config.x, 
                      y: config.y,
                      scale: 1,
                      transition: { duration: 0.4, ease: "easeInOut" }
                    },
                    hover: { 
                      // Effet de déploiement (fan out) symétrique au survol
                      rotate: config.rotate * 1.8, 
                      x: config.x * 2.5, 
                      y: config.y * 1.5,
                      scale: 1.03,
                      borderColor: "rgba(59, 130, 246, 0.6)",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }
                  }}
                >
                  {/* Image de fond floutée ou placeholder propre si l'image charge */}
                  <div className="absolute inset-0 bg-slate-950/40 z-10 transition-opacity group-hover:opacity-10 opacity-30" />
                  
                  <Image 
                    src={src} 
                    alt={`Preview ${idx + 1}`} 
                    fill 
                    className="object-cover rounded-xl select-none"
                    sizes="(max-w-784px) 256px, 320px"
                  />

                  {/* Bouton central uniquement visible sur l'image du dessus */}
                  {idx === 0 && (
                    <div className="absolute z-20 flex flex-col items-center gap-2 bg-slate-950/80 border border-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-xl transition-all group-hover:scale-105 group-hover:border-blue-400">
                      <Eye className="w-4 h-4 text-blue-400 animate-pulse" />
                      {/* <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Open Stack</span> */}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================================
          POPUP DE LA GALERIE TECHNOLOGIQUE (MODAL)
         ========================================================= */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
          >
            {/* Fenêtre principale */}
            <motion.div 
              className="relative bg-slate-950/90 border border-blue-500/40 rounded-3xl p-6 w-full max-w-3xl aspect-[4/3] sm:aspect-video flex flex-col justify-between shadow-2xl shadow-blue-500/10 overflow-hidden"
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              <div className="absolute top-3 left-4 font-mono text-[10px] text-blue-400/60 tracking-widest hidden sm:block">
                SYS_GUI_MODE // DATA_VAULT_VIEWER.EXE
              </div>

              {/* Bouton de fermeture */}
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 border border-border text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Zone d'affichage de la photo centrale */}
              <div className="relative w-full h-full flex items-center justify-center my-4 overflow-hidden rounded-xl border border-border/40 bg-slate-900/40">
                <div className="relative w-full h-full p-2">
                  <Image 
                    src={photos[currentPhotoIdx]} 
                    alt={`Joel Photo ${currentPhotoIdx + 1}`}
                    fill
                    priority
                    className="object-contain rounded-xl p-1 select-none"
                  />
                </div>

                {/* Commandes de navigation */}
                {photos.length > 1 && (
                  <>
                    <button 
                      onClick={prevPhoto}
                      className="absolute left-4 z-10 p-2 bg-slate-950/70 border border-blue-500/20 text-blue-400 hover:text-white hover:border-blue-400 rounded-xl transition-all cursor-pointer shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextPhoto}
                      className="absolute right-4 z-10 p-2 bg-slate-950/70 border border-blue-500/20 text-blue-400 hover:text-white hover:border-blue-400 rounded-xl transition-all cursor-pointer shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Barre de contrôle du bas */}
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-t border-border/40 pt-3">
                <span className="text-purple-400">
                  FILE: 0{currentPhotoIdx + 1} / {photos.length}
                </span>
                
                {/* Indicateurs de progression (petits points) */}
                <div className="flex gap-1.5 max-w-[40%] overflow-x-auto py-1 no-scrollbar">
                  {photos.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 min-w-[6px] rounded-full transition-all duration-300 ${idx === currentPhotoIdx ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-800'}`}
                    />
                  ))}
                </div>

                <span className="text-blue-400 text-[10px] hidden sm:block">
                  STATUS: SECURE_DISPLAY
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}