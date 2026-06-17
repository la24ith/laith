// components/sections/Skills.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Skills() {
  const { t } = useLanguage();

  const coreSkills = [
    'Flutter', 'Dart', 'Firebase', 'REST APIs',
    'GraphQL', 'Clean Architecture', 'BLoC', 'Riverpod',
    'GetX', 'Provider', 'Hive', 'SQLite',
  ];

  const stateManagement = [
    'BLoC', 'Riverpod', 'Provider', 'GetX',
    'Cubit', 'MobX', 'Redux', 'MVC',
  ];

  const backend = [
    'Firebase', 'Supabase', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL',
  ];

  const tools = [
    'VS Code', 'Android Studio', 'Git', 'GitHub',
    'CI/CD', 'Docker', 'Figma', 'Postman',
  ];

  const skillGroups = [
    { title: t('skills.primary'), skills: coreSkills, color: 'border-[#0468d7]/30' },
    { title: t('skills.state'), skills: stateManagement, color: 'border-[#7c5cfc]/30' },
    { title: t('skills.backend'), skills: backend, color: 'border-[#27c6da]/30' },
    { title: t('skills.tools'), skills: tools, color: 'border-[#f59e0b]/30' },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-white/[0.02]">
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
              {t('skills.title')}
            </span>
          </div>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle mx-auto">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="space-y-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * groupIndex }}
              className={`glass rounded-2xl p-6 border ${group.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                {groupIndex === 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/20 text-[#27c6da] text-xs font-mono">
                    {t('skills.primary.tag')}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * (index + 1) }}
                    className="chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}