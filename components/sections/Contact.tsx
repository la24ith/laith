// components/sections/Contact.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Youtube, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contacts = [
    { icon: Mail, label: t('contact.email'), value: 'la24ithdev@gmail.com', href: 'mailto:la24ithdev@gmail.com' },
    { icon: Linkedin, label: t('contact.linkedin'), value: 'LinkedIn', href: 'https://www.linkedin.com/in/laith-kalash-3635b5254' },
    { icon: Github, label: t('contact.github'), value: 'GitHub', href: 'https://github.com/laithkallash' },
    { icon: Instagram, label: t('contact.instagram'), value: '@flutterwithlaith', href: 'https://www.instagram.com/flutterwithlaith' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
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
              {t('contact.title')}
            </span>
          </div>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[#27c6da]/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#27c6da]/10 flex items-center justify-center shrink-0 group-hover:bg-[#27c6da]/20 transition-colors">
                  <contact.icon className="w-4 h-4 text-[#27c6da]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#5f6b7d]">{contact.label}</p>
                  <p className="text-sm font-medium truncate">{contact.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#9aa7b8] mb-1.5">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#5f6b7d] focus:border-[#27c6da] focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#9aa7b8] mb-1.5">
                  {t('contact.email.label')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#5f6b7d] focus:border-[#27c6da] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#9aa7b8] mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#5f6b7d] focus:border-[#27c6da] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                {t('contact.send')}
              </button>
              <p className="text-xs text-[#5f6b7d] text-center">{t('contact.note')}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}