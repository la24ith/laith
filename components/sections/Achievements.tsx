// components/sections/Achievements.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Shield, Server, Video, Award } from 'lucide-react';

export default function Achievements() {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: GraduationCap,
      title: t('achievements.education'),
      subtitle: t('achievements.university'),
      date: '2024',
      color: 'from-[#0468d7] to-[#27c6da]',
    },
    {
      icon: Code2,
      title: t('achievements.octo'),
      subtitle: 'Building cross-platform Flutter applications',
      date: '2023 - Present',
      color: 'from-[#27c6da] to-[#7c5cfc]',
    },
    {
      icon: Shield,
      title: t('achievements.qa'),
      subtitle: 'Quality assurance and testing engineering',
      date: '2022 - 2023',
      color: 'from-[#7c5cfc] to-[#0468d7]',
    },
    {
      icon: Server,
      title: t('achievements.it'),
      subtitle: 'IT support and infrastructure management',
      date: '2021 - 2022',
      color: 'from-[#f59e0b] to-[#0468d7]',
    },
    {
      icon: Video,
      title: t('achievements.content'),
      subtitle: 'Creating Flutter educational content',
      date: '2023 - Present',
      color: 'from-[#0468d7] to-[#7c5cfc]',
    },
  ];

  return (
    <section className="py-20 lg:py-32">
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
              {t('achievements.title')}
            </span>
          </div>
          <h2 className="section-title">{t('achievements.title')}</h2>
          <p className="section-subtitle mx-auto">{t('achievements.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[#0468d7] via-[#27c6da] to-transparent" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative flex items-center gap-6"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg shadow-${achievement.color.split(' ')[1]}/20 shrink-0`}>
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 glass rounded-xl p-6 hover:border-[#27c6da]/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-[#9aa7b8] mt-1">{achievement.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/20 text-[#27c6da] text-xs font-mono whitespace-nowrap">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}