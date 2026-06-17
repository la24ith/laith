// components/sections/Projects.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Flutter App',
      description: 'Full-featured e-commerce application with real-time inventory, payment integration, and AI-powered recommendations.',
      image: '/projects/ecommerce.jpg',
      tech: ['Flutter', 'Firebase', 'Stripe', 'BLoC'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Cross-platform health tracking app with wearable integration, workout plans, and nutrition tracking.',
      image: '/projects/fitness.jpg',
      tech: ['Flutter', 'Riverpod', 'Hive', 'WebSocket'],
      architecture: 'Feature-first',
      demo: '#',
      github: '#',
    },
    {
      title: 'Real Estate Marketplace',
      description: 'Property listing platform with AR virtual tours, mortgage calculator, and AI property valuation.',
      image: '/projects/realestate.jpg',
      tech: ['Flutter', 'Supabase', 'MapBox', 'GetX'],
      architecture: 'Modular',
      demo: '#',
      github: '#',
    },
    {
      title: 'Food Delivery App',
      description: 'On-demand food delivery with real-time tracking, restaurant management, and smart routing.',
      image: '/projects/food.jpg',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
    },
    {
      title: 'Finance Management Dashboard',
      description: 'Personal finance app with AI insights, budgeting, expense tracking, and investment portfolio.',
      image: '/projects/finance.jpg',
      tech: ['Flutter', 'MongoDB', 'Riverpod', 'Charts'],
      architecture: 'MVVM',
      demo: '#',
      github: '#',
    },
    {
      title: 'Social Media Platform',
      description: 'Feature-rich social media app with live streaming, stories, chat, and content moderation.',
      image: '/projects/social.jpg',
      tech: ['Flutter', 'Firebase', 'WebRTC', 'BLoC'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
              <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
                {t('projects.title')}
              </span>
            </div>
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">{t('projects.subtitle')}</p>
          </div>
          <Link href="/projects" className="btn-secondary shrink-0">
            {t('projects.viewAll')}
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group glass rounded-xl overflow-hidden hover:border-[#27c6da]/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-32 rounded-xl bg-[#0a0e14]/80 border border-white/10 backdrop-blur-sm p-2 transform translate-y-4">
                    <div className="h-1.5 w-8 bg-white/20 rounded-full mb-2" />
                    <div className="h-1.5 w-5 bg-white/20 rounded-full mb-2" />
                    <div className="flex-1 bg-white/10 rounded-lg mt-3" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
                  Flutter
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-[#9aa7b8] leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-md border border-white/10 text-xs font-mono text-[#9aa7b8]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-[#5f6b7d] font-mono">{project.architecture}</span>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.demo} className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}