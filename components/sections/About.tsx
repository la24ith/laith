// components/sections/About.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, Mail } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const focusAreas = [
    t('about.focus.architecture'),
    t('about.focus.state'),
    t('about.focus.api'),
    t('about.focus.firebase'),
    t('about.focus.performance'),
    t('about.focus.animation'),
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
            <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
              {t('about.title')}
            </span>
          </div>
          <h2 className="section-title mb-4">{t('about.title')}</h2>
          <p className="section-subtitle mb-12">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 glass rounded-2xl p-6 lg:p-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-3xl font-bold text-white mb-4">
                LK
              </div>
              <h3 className="font-display text-xl font-bold">Laith Kallash</h3>
              <p className="text-[#27c6da] font-mono text-sm mt-1">{t('about.role')}</p>

              <div className="mt-6 space-y-3 text-sm text-[#9aa7b8]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#27c6da]" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-[#27c6da]" />
                  <span>{t('about.availability')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#27c6da]" />
                  <span>{t('about.experience')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#27c6da]" />
                  <a href="mailto:la24ithdev@gmail.com" className="hover:text-white transition-colors">
                    la24ithdev@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-mono text-[#5f6b7d] uppercase tracking-wider mb-3">
                  {t('about.support.title')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#9aa7b8] bg-white/5">
                    {t('about.support.qa')}
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#9aa7b8] bg-white/5">
                    {t('about.support.it')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-[#9aa7b8] text-lg leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-4">
                {t('about.focus.title')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * (index + 1) }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da]" />
                    <span className="text-sm font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-[#9aa7b8]">💡 {t('about.support.title')}</p>
                  <p className="text-sm font-medium mt-1">
                    {t('about.support.qa')} • {t('about.support.it')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/20 text-[#27c6da] text-xs font-medium">
                    {t('about.support.qa')}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#7c5cfc]/10 border border-[#7c5cfc]/20 text-[#7c5cfc] text-xs font-medium">
                    {t('about.support.it')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}