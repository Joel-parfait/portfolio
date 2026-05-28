// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  // Liste de tes projets basés sur ta maquette et tes réalisations
  const projectsList = [
    {
      title: "TradeSim",
      description: "Une application full-stack de simulation de trading intégrant la gestion de données en temps réel, l'analyse d'indicateurs et une infrastructure de base de données optimisée.",
      tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      bgImage: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black"
    },
    {
      title: "OSINT Intelligence Platform",
      description: "Plateforme de collecte et d'analyse d'informations de sources ouvertes (OSINT) conçue pour automatiser la détection de menaces et générer des rapports de sécurité.",
      tags: ["Java", "Maven", "Cybersecurity", "Data Analysis"],
      liveLink: "#",
      githubLink: "#",
      bgImage: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-black"
    },
    {
      title: "VPN IPsec Site-to-Site Implementation",
      description: "Conception, déploiement et audit de sécurité d'une architecture VPN IPsec hautement sécurisée pour l'interconnexion de sites distants avec chiffrement fort.",
      tags: ["IPsec", "VPN", "Network Security", "Cisco"],
      liveLink: "#",
      githubLink: "#",
      bgImage: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-900 to-black"
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Outil de surveillance réseau en temps réel permettant l'analyse de paquets, la détection d'anomalies de trafic et le reporting d'incidents via des alertes automatisées.",
      tags: ["Wireshark", "Python", "Network Control", "Traffic Analysis"],
      liveLink: "#",
      githubLink: "#",
      bgImage: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-black"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full space-y-12">
      
      {/* En-tête de section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <span className="text-blue-500 font-mono text-sm tracking-wider">// FEATURED WORK</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h2>
      </motion.div>

      {/* Grille de projets (2 colonnes sur desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-between min-h-[350px] group transition-all duration-300 hover:border-blue-500/30 ${project.bgImage}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            {/* Effet d'éclairage au survol (Glow) */}
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Corps de la carte */}
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bas de la carte (Tags + Liens) */}
            <div className="mt-6 space-y-6 relative z-10">
              {/* Badges / Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-3 py-1 text-xs font-mono rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens d'action */}
              <div className="flex items-center gap-6 pt-2 border-t border-border/50">
                <a 
                  href={project.liveLink} 
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group/link"
                >
                  View Project 
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-white transition-colors" />
                </a>
                <a 
                  href={project.githubLink} 
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" /> 
                  Repository
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}