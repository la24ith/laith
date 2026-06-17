// components/sections/Services.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Smartphone, MessageSquare, RefreshCw, 
  Zap, Shield, Users, ArrowRight 
} from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: t('services.app'),
      description: t('services.app.desc'),
    },
    {
      icon: MessageSquare,
      title: t('services.consulting'),
      description: t('services.consulting.desc'),
    },
    {
      icon: RefreshCw,
      title: t('services.migration'),
      description: t('services.migration.desc'),
    },
    {
      icon: Zap,
      title: t('services.optimization'),
      description: t('services.optimization.desc'),
    },
    {
      icon: Shield,
      title: t('services.maintenance'),
      description: t('services.maintenance.desc'),
    },
    {
      icon: Users,
      title: t('services.team'),
      description: t('services.team.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
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
              {t('services.title')}
            </span>
          </div>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="group glass rounded-xl p-6 hover:border-[#0468d7]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#27c6da]">0{index + 1}</span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 border border-[#27c6da]/20 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-[#27c6da]" />
                </div>
              </div>
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-[#9aa7b8] leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center gap-2 text-[#27c6da] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}