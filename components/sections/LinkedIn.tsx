// components/sections/LinkedIn.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Users, Briefcase, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LinkedIn() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-white/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
            <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
              LinkedIn
            </span>
          </div>
          <h2 className="section-title">LinkedIn Profile</h2>
          <p className="section-subtitle mx-auto">Connect with me professionally</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center hover:border-[#27c6da]/30 transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
              LK
            </div>
            <h3 className="font-display text-2xl font-bold">Laith Kallash</h3>
            <p className="text-[#27c6da] font-mono text-sm mt-1">Senior Flutter Developer</p>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <Users className="w-5 h-5 text-[#27c6da] mx-auto mb-1" />
                <div className="font-mono text-lg font-semibold">500+</div>
                <div className="text-xs text-[#5f6b7d]">Connections</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <Briefcase className="w-5 h-5 text-[#27c6da] mx-auto mb-1" />
                <div className="font-mono text-lg font-semibold">4+</div>
                <div className="text-xs text-[#5f6b7d]">Experience</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-5 h-5 text-[#27c6da] mx-auto mb-1" />
                <div className="font-mono text-lg font-semibold">12</div>
                <div className="text-xs text-[#5f6b7d]">Skills</div>
              </div>
            </div>

            <Link
              href="https://www.linkedin.com/in/laith-kalash-3635b5254"
              target="_blank"
              className="btn-primary mt-6 inline-flex"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
