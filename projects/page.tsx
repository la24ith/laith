// app/projects/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'E-Commerce', 'Health', 'Real Estate', 'Food', 'Finance', 'Social'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Flutter App',
      description: 'Full-featured e-commerce application with real-time inventory, payment integration, and AI-powered recommendations.',
      category: 'E-Commerce',
      tech: ['Flutter', 'Firebase', 'Stripe', 'BLoC'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
      image: '/projects/ecommerce.jpg',
    },
    {
      id: 2,
      title: 'Health & Fitness Tracker',
      description: 'Cross-platform health tracking app with wearable integration, workout plans, and nutrition tracking.',
      category: 'Health',
      tech: ['Flutter', 'Riverpod', 'Hive', 'WebSocket'],
      architecture: 'Feature-first',
      demo: '#',
      github: '#',
      image: '/projects/fitness.jpg',
    },
    {
      id: 3,
      title: 'Real Estate Marketplace',
      description: 'Property listing platform with AR virtual tours, mortgage calculator, and AI property valuation.',
      category: 'Real Estate',
      tech: ['Flutter', 'Supabase', 'MapBox', 'GetX'],
      architecture: 'Modular',
      demo: '#',
      github: '#',
      image: '/projects/realestate.jpg',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      description: 'On-demand food delivery with real-time tracking, restaurant management, and smart routing.',
      category: 'Food',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
      image: '/projects/food.jpg',
    },
    {
      id: 5,
      title: 'Finance Management Dashboard',
      description: 'Personal finance app with AI insights, budgeting, expense tracking, and investment portfolio.',
      category: 'Finance',
      tech: ['Flutter', 'MongoDB', 'Riverpod', 'Charts'],
      architecture: 'MVVM',
      demo: '#',
      github: '#',
      image: '/projects/finance.jpg',
    },
    {
      id: 6,
      title: 'Social Media Platform',
      description: 'Feature-rich social media app with live streaming, stories, chat, and content moderation.',
      category: 'Social',
      tech: ['Flutter', 'Firebase', 'WebRTC', 'BLoC'],
      architecture: 'Clean Architecture',
      demo: '#',
      github: '#',
      image: '/projects/social.jpg',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {t('projects.title')}
          </h1>
          <p className="text-[#9aa7b8] text-lg mt-4">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5f6b7d]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#5f6b7d] focus:border-[#27c6da] focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  category === cat
                    ? 'bg-[#27c6da] text-[#04101f]'
                    : 'bg-white/5 border border-white/10 text-[#9aa7b8] hover:bg-white/10'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
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
                  {project.category}
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#9aa7b8]">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
