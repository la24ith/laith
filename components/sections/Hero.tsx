// components/sections/Hero.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const { t, dir } = useLanguage();

  const stats = [
    { number: 30, label: t('hero.stats.projects'), suffix: '+' },
    { number: 12, label: t('hero.stats.apps'), suffix: '+' },
    { number: 4, label: t('hero.stats.experience'), suffix: '+' },
    { number: 20, label: t('hero.stats.clients'), suffix: '+' },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-16">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-[#0468d7]/20 via-[#7c5cfc]/10 to-transparent opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${dir === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#3ddc97]" />
              <span className="text-sm font-mono text-[#9aa7b8]">{t('hero.badge')}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-6">
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.title.gradient')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9aa7b8] max-w-xl leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/projects" className="btn-primary">
                {t('hero.projects')}
              </Link>
              <Link href="/#contact" className="btn-secondary">
                {t('hero.hire')}
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-mono text-2xl sm:text-3xl font-semibold">
                      {stat.number}
                    </span>
                    <span className="text-lg text-[#27c6da] font-semibold">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5f6b7d] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Widget Tree */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="border border-white/10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.005] overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-[#5f6b7d] ml-2">widget_tree.dart</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-hidden">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 animate-slideIn">
                    <span className="text-[#5f6b7d]">├──</span>
                    <span className="text-[#27c6da] font-medium">MaterialApp</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6 animate-slideIn delay-100">
                    <span className="text-[#5f6b7d]">├──</span>
                    <span className="text-[#27c6da]">Scaffold</span>
                  </div>
                  <div className="flex items-center gap-2 pl-12 animate-slideIn delay-200">
                    <span className="text-[#5f6b7d]">├──</span>
                    <span className="text-[#27c6da]">AppBar</span>
                    <span className="text-[#7c5cfc]">title</span>
                    <span className="text-[#5f6b7d]">:</span>
                    <span className="text-[#e8f4ff]">"My App"</span>
                  </div>
                  <div className="flex items-center gap-2 pl-12 animate-slideIn delay-300">
                    <span className="text-[#5f6b7d]">└──</span>
                    <span className="text-[#27c6da]">Body</span>
                  </div>
                  <div className="flex items-center gap-2 pl-18 animate-slideIn delay-400">
                    <span className="text-[#5f6b7d]">├──</span>
                    <span className="text-[#27c6da]">Center</span>
                  </div>
                  <div className="flex items-center gap-2 pl-24 animate-slideIn delay-500">
                    <span className="text-[#5f6b7d]">└──</span>
                    <span className="text-[#27c6da]">Text</span>
                    <span className="text-[#7c5cfc]">data</span>
                    <span className="text-[#5f6b7d]">:</span>
                    <span className="text-[#e8f4ff]">"Hello Flutter"</span>
                  </div>
                  <div className="flex items-center gap-2 pl-24 animate-pulse mt-4">
                    <span className="w-2 h-4 bg-[#27c6da] animate-blink" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}