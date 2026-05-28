// src/components/ExperienceAndContact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, Award, Send } from 'lucide-react';

export default function ExperienceAndContact() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full space-y-24">
      
      {/* =========================================================
          SECTION EXPERIENCE & CERTIFICATIONS
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Colonne Gauche : Professional Journey */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={scrollVariants}
        >
          <div className="space-y-2">
            <span className="text-blue-500 font-mono text-sm tracking-wider">// EXPERIENCE</span>
            <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
          </div>

          <div className="space-y-6 relative border-l border-border pl-6 ml-2">
            {/* Poste 1 - ANTIC */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-background border border-blue-500 p-1 rounded-full text-blue-500">
                <Briefcase className="w-3 h-3" />
              </div>
              <span className="text-xs font-mono text-blue-400">2026 - Présent</span>
              <h4 className="text-xl font-bold text-white">IT & Cybersecurity Team</h4>
              <p className="text-sm text-slate-400 font-medium">ANTIC (National Agency for Information and Communication Technologies)</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>Interventions au sein du Computer Incident Response Team (CIRT).</li>
                <li>Analyse de paquets et surveillance du trafic réseau.</li>
                <li>Audit de sécurité et réponse aux incidents.</li>
              </ul>
            </div>

            {/* Poste 2 - Freelance */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-background border border-purple-500 p-1 rounded-full text-purple-500">
                <Briefcase className="w-3 h-3" />
              </div>
              <span className="text-xs font-mono text-purple-400">2024 - Présent</span>
              <h4 className="text-xl font-bold text-white">Full-Stack Web Developer</h4>
              <p className="text-sm text-slate-400 font-medium">Freelance / Projets Personnels</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>Développement d'applications web modernes complexes (TradeSim).</li>
                <li>Localisation et internationalisation de plateformes web.</li>
                <li>Modélisation de bases de données relationnelles (PostgreSQL/SQL).</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Colonne Droite : Professional Development */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={scrollVariants}
        >
          <div className="space-y-2">
            <span className="text-purple-500 font-mono text-sm tracking-wider">// CERTIFICATIONS</span>
            <h2 className="text-3xl font-bold text-white">Professional Development</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: "Networking Essentials", org: "Cisco Networking Academy" },
              { title: "Cybersecurity Essentials", org: "Cisco Networking Academy" },
              { title: "Linux Unhatched", org: "NDG / Cisco Networking Academy" },
              { title: "Web Development", org: "OpenClassrooms / Autodidacte" }
            ].map((cert, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-purple-500/30 transition-colors">
                <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{cert.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* =========================================================
          SECTION CONTACT (LET'S WORK TOGETHER)
         ========================================================= */}
      <motion.div 
        className="pt-12 border-t border-border/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={scrollVariants}
      >
        <div className="space-y-2 mb-12">
          <span className="text-cyan-500 font-mono text-sm tracking-wider">// GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Work Together</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-card/30 border border-border/60 p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-sm">
          {/* Lueur d'ambiance en fond de formulaire */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Coordonnées (Gauche) */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Actuellement ouvert aux opportunités de stage, d'emploi ou de projets en freelance. N'hésitez pas à me contacter !
              </p>
              
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>joel.parfait@outlook.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+237 6xx xx xx xx</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>

            {/* Liens réseaux sociaux optionnels */}
            <div className="flex gap-4 pt-6 text-xs font-mono text-slate-500">
              <span className="hover:text-blue-400 cursor-pointer">LN</span>
              <span>/</span>
              <span className="hover:text-purple-400 cursor-pointer">GH</span>
              <span>/</span>
              <span className="hover:text-cyan-400 cursor-pointer">TW</span>
            </div>
          </div>

          {/* Formulaire (Droite) */}
          <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono text-slate-400">NAME</label>
              <input type="text" placeholder="Your name" className="p-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm transition-colors" />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono text-slate-400">EMAIL</label>
              <input type="email" placeholder="your.email@example.com" className="p-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm transition-colors" />
            </div>

            <div className="flex flex-col space-y-2 sm:col-span-2">
              <label className="text-xs font-mono text-slate-400">MESSAGE</label>
              <textarea rows={4} placeholder="Tell me about your project or opportunity..." className="p-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm resize-none transition-colors" />
            </div>

            <div className="sm:col-span-2 flex justify-end pt-2">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/10 w-full sm:w-auto justify-center group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>

        </div>
      </motion.div>

    </section>
  );
}