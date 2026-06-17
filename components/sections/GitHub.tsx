// components/sections/GitHub.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, Code2, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GitHub() {
  const { t } = useLanguage();

  const repos = [
    {
      name: 'flutter_clean_architecture',
      description: 'Complete Flutter Clean Architecture template with BLoC and Riverpod',
      stars: 128,
      forks: 45,
      language: 'Dart',
    },
    {
      name: 'firebase_flutter_auth',
      description: 'Production-ready Firebase authentication flows for Flutter',
      stars: 87,
      forks: 32,
      language: 'Dart',
    },
    {
      name: 'flutter_animations_library',
      description: 'Comprehensive animations library for Flutter applications',
      stars: 156,
      forks: 53,
      language: 'Dart',
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
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
            <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
              {t('github.title')}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="section-title">{t('github.title')}</h2>
              <p className="section-subtitle">{t('github.subtitle')}</p>
            </div>
            <Link 
              href="https://github.com/laithkallash" 
              target="_blank"
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              {t('github.view')}
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 border border-[#27c6da]/20 flex items-center justify-center">
                <Github className="w-6 h-6 text-[#27c6da]" />
              </div>
              <div>
                <h3 className="font-display font-semibold">laithkallash</h3>
                <p className="text-xs text-[#5f6b7d] font-mono">@laithkallash</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="font-mono text-xl font-semibold">24</div>
                <div className="text-xs text-[#5f6b7d]">{t('github.repos')}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="font-mono text-xl font-semibold">156</div>
                <div className="text-xs text-[#5f6b7d]">{t('github.contributions')}</div>
              </div>
            </div>
          </motion.div>

          {/* Repos */}
          <div className="lg:col-span-2 space-y-4">
            {repos.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-xl p-4 hover:border-[#27c6da]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display font-semibold">{repo.name}</h4>
                    <p className="text-sm text-[#9aa7b8] mt-1">{repo.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs text-[#5f6b7d]">
                        <span className="w-2 h-2 rounded-full bg-[#27c6da]" />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#5f6b7d]">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#5f6b7d]">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <a 
                    href={`https://github.com/laithkallash/${repo.name}`}
                    target="_blank"
                    className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}