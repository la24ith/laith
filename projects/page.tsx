// app/projects/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  architecture: string;
  demo: string;
  github: string;
  /** Cover shown on the card. Use null to show the gradient placeholder. */
  coverImage: string | null;
  /** Extra screenshots shown in the modal gallery. */
  screenshots: string[];
  /** Feature highlights shown in the modal. */
  highlights?: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: 'موعدي – حجز المواعيد الطبية',
    description:
      'تطبيق Flutter متكامل لحجز المواعيد الطبية يتيح للمريض البحث عن طبيب حسب التخصص، اختيار التاريخ والوقت المناسبين، وتأكيد الحجز مع إشعارات تذكيرية.',
    category: 'Health',
    tech: ['Flutter', 'Firebase', 'BLoC', 'Dart'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    // ✅ ضع الصورة في: /public/projects/mawidi-preview.png
    coverImage: '/projects/mawidi-preview.png',
    screenshots: [
      '/projects/mawidi-preview.png',
      // أضف المزيد من لقطات الشاشة هنا
    ],
    highlights: [
      'بحث ذكي عن الأطباء حسب التخصص أو الاسم',
      'تقويم تفاعلي لاختيار الموعد',
      'قائمة أطباء مميزين مع التقييمات',
      'تأكيد الحجز وإضافته للتقويم',
      'إشعارات تذكيرية بالمواعيد',
      'واجهة عربية RTL بالكامل',
    ],
  },
  {
    id: 2,
    title: 'E-Commerce Flutter App',
    description:
      'Full-featured e-commerce application with real-time inventory, payment integration, and AI-powered recommendations.',
    category: 'E-Commerce',
    tech: ['Flutter', 'Firebase', 'Stripe', 'BLoC'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description:
      'Cross-platform health tracking app with wearable integration, workout plans, and nutrition tracking.',
    category: 'Health',
    tech: ['Flutter', 'Riverpod', 'Hive', 'WebSocket'],
    architecture: 'Feature-first',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
  {
    id: 4,
    title: 'Real Estate Marketplace',
    description:
      'Property listing platform with AR virtual tours, mortgage calculator, and AI property valuation.',
    category: 'Real Estate',
    tech: ['Flutter', 'Supabase', 'MapBox', 'GetX'],
    architecture: 'Modular',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
  {
    id: 5,
    title: 'Food Delivery App',
    description:
      'On-demand food delivery with real-time tracking, restaurant management, and smart routing.',
    category: 'Food',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
  {
    id: 6,
    title: 'Finance Management Dashboard',
    description:
      'Personal finance app with AI insights, budgeting, expense tracking, and investment portfolio.',
    category: 'Finance',
    tech: ['Flutter', 'MongoDB', 'Riverpod', 'Charts'],
    architecture: 'MVVM',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
  {
    id: 7,
    title: 'Social Media Platform',
    description:
      'Feature-rich social media app with live streaming, stories, chat, and content moderation.',
    category: 'Social',
    tech: ['Flutter', 'Firebase', 'WebRTC', 'BLoC'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: null,
    screenshots: [],
  },
];

const categories = ['all', 'E-Commerce', 'Health', 'Real Estate', 'Food', 'Finance', 'Social'];

// ─── Placeholder card thumbnail ──────────────────────────────────────────────

function PlaceholderThumbnail({ category }: { category: string }) {
  return (
    <div className="h-48 bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 relative overflow-hidden flex items-center justify-center">
      <div className="w-20 h-32 rounded-xl bg-[#0a0e14]/80 border border-white/10 backdrop-blur-sm p-2 transform translate-y-4">
        <div className="h-1.5 w-8 bg-white/20 rounded-full mb-2" />
        <div className="h-1.5 w-5 bg-white/20 rounded-full mb-2" />
        <div className="flex-1 bg-white/10 rounded-lg mt-3" />
      </div>
      <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
        {category}
      </span>
    </div>
  );
}

// ─── Project Modal ────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const shots = project.screenshots.length > 0 ? project.screenshots : [];

  const prev = () => setImgIdx((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setImgIdx((i) => (i + 1) % shots.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#080d15] border border-white/10 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Gallery */}
          {shots.length > 0 && (
            <div className="relative bg-gradient-to-br from-[#0468d7]/10 to-[#7c5cfc]/10 overflow-hidden rounded-t-2xl">
              <div className="relative h-72 md:h-96 flex items-center justify-center p-4">
                <Image
                  src={shots[imgIdx]}
                  alt={`${project.title} screenshot ${imgIdx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {shots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {shots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === imgIdx ? 'bg-[#27c6da] w-4' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-4 gap-4">
              <div>
                <span className="px-2 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/30 text-[#27c6da] text-xs font-mono mb-2 inline-block">
                  {project.category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
              <div className="flex gap-3 shrink-0 mt-1">
                <a
                  href={project.github}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#9aa7b8] hover:text-[#27c6da] hover:border-[#27c6da]/40 transition-all"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demo}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#9aa7b8] hover:text-[#27c6da] hover:border-[#27c6da]/40 transition-all"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-[#9aa7b8] leading-relaxed mb-6">{project.description}</p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">
                  المميزات الرئيسية
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#9aa7b8]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#27c6da] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-[#9aa7b8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              <span className="text-xs text-[#5f6b7d] font-mono">Architecture:</span>
              <span className="text-xs text-[#27c6da] font-mono">{project.architecture}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
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
                onClick={() => setSelectedProject(project)}
                className="group glass rounded-xl overflow-hidden hover:border-[#27c6da]/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                {project.coverImage ? (
                  <div className="h-48 relative overflow-hidden bg-[#060b13]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b13]/60 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
                      {project.category}
                    </span>
                    {/* "View details" hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-4 py-2 rounded-xl bg-[#27c6da]/90 text-[#04101f] text-sm font-semibold backdrop-blur-sm">
                        عرض التفاصيل
                      </span>
                    </div>
                  </div>
                ) : (
                  <PlaceholderThumbnail category={project.category} />
                )}

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-[#9aa7b8] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md border border-white/10 text-xs font-mono text-[#9aa7b8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-[#5f6b7d] font-mono">{project.architecture}</span>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors"
                      >
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

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
