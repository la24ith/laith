// components/sections/Experience.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Shield, Server } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      type: 'primary',
      icon: Code2,
      title: t('experience.octo'),
      period: '2023 - Present',
      description: t('experience.octo.desc'),
      responsibilities: t('experience.octo.responsibilities'),
      badge: t('experience.current'),
    },
    {
      type: 'secondary',
      icon: Shield,
      title: t('experience.qa'),
      period: '2022 - 2023',
      description: 'Quality assurance and testing for mobile applications.',
      responsibilities: [
        'Manual and automated testing',
        'Test case creation and execution',
        'Bug tracking and reporting',
        'Quality metrics analysis',
      ],
    },
    {
      type: 'secondary',
      icon: Server,
      title: t('experience.it'),
      period: '2021 - 2022',
      description: 'IT support and infrastructure management.',
      responsibilities: [
        'Hardware and software troubleshooting',
        'Network administration',
        'System maintenance',
        'User support and training',
      ],
    },
    {
      type: 'secondary',
      icon: GraduationCap,
      title: t('experience.education'),
      period: '2024',
      description: t('experience.university'),
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
            <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
              {t('experience.title')}
            </span>
          </div>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute right-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0468d7] via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative pl-16"
              >
                <div className="absolute left-[14px] top-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0a0e14] shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    exp.type === 'primary' 
                      ? 'bg-gradient-to-r from-[#27c6da] to-[#0468d7]' 
                      : 'bg-[#11171f] border-2 border-[#5f6b7d]'
                  }`}>
                    <exp.icon className={`w-2.5 h-2.5 ${exp.type === 'primary' ? 'text-white' : 'text-[#5f6b7d]'}`} />
                  </div>
                </div>

                <div className={`glass rounded-xl p-6 border ${
                  exp.type === 'primary' 
                    ? 'border-[#0468d7]/30 bg-gradient-to-br from-[#0468d7]/10 to-white/5' 
                    : 'border-white/10'
                }`}>
                  {exp.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/20 text-[#27c6da] text-xs font-mono mb-3">
                      {exp.badge}
                    </span>
                  )}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                      <p className="text-[#27c6da] text-sm font-mono mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-[#9aa7b8] text-sm mt-3">{exp.description}</p>
                  
                  {exp.responsibilities && Array.isArray(exp.responsibilities) && (
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#9aa7b8]">
                          <span className="text-[#27c6da] mt-0.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}