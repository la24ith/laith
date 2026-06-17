// components/sections/CTA.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-white/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#0468d7]/20 via-[#7c5cfc]/10 to-transparent border border-white/10"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-[#27c6da]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-[#9aa7b8] mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                <Calendar className="w-4 h-4" />
                {t('cta.consult')}
              </Link>
              <Link href="/#contact" className="btn-secondary">
                <Mail className="w-4 h-4" />
                {t('cta.contact')}
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#5f6b7d]">
              <span>⚡</span>
              <span>Available for freelance projects • Starting from $50/hr</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}