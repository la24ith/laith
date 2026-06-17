// app/blog/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: 'Flutter Clean Architecture: A Complete Guide',
      excerpt: 'Learn how to implement Clean Architecture in Flutter applications for better maintainability and scalability.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Architecture',
      image: '/blog/clean-architecture.jpg',
      tags: ['Flutter', 'Clean Architecture', 'BLoC'],
    },
    {
      id: 2,
      title: 'Riverpod vs Bloc: Which State Management Should You Choose?',
      excerpt: 'A comprehensive comparison between Riverpod and Bloc for Flutter state management.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'State Management',
      image: '/blog/riverpod-vs-bloc.jpg',
      tags: ['Flutter', 'Riverpod', 'BLoC'],
    },
    {
      id: 3,
      title: 'Flutter Performance Optimization: Best Practices',
      excerpt: 'Essential tips and techniques to optimize performance in Flutter applications.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Performance',
      image: '/blog/performance.jpg',
      tags: ['Flutter', 'Performance', 'Optimization'],
    },
    {
      id: 4,
      title: 'Firebase Integration in Flutter: A Complete Tutorial',
      excerpt: 'Step-by-step guide to integrating Firebase services in Flutter applications.',
      date: '2024-01-01',
      readTime: '15 min read',
      category: 'Firebase',
      image: '/blog/firebase.jpg',
      tags: ['Flutter', 'Firebase', 'Authentication'],
    },
    {
      id: 5,
      title: 'Flutter UI Best Practices: Building Beautiful Apps',
      excerpt: 'Learn the best practices for creating stunning and responsive Flutter UIs.',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'UI/UX',
      image: '/blog/ui-best-practices.jpg',
      tags: ['Flutter', 'UI/UX', 'Design'],
    },
  ];

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
            {t('blog.title')}
          </h1>
          <p className="text-[#9aa7b8] text-lg mt-4">Flutter insights, tutorials, and best practices</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="group glass rounded-xl overflow-hidden hover:border-[#27c6da]/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  📱
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#5f6b7d] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#27c6da] transition-colors">
                  <Link href={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <p className="text-sm text-[#9aa7b8] leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-md border border-white/10 text-xs font-mono text-[#9aa7b8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#27c6da] group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}