// components/Footer.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t('footer.home') },
    { href: '/#about', label: t('footer.about') },
    { href: '/#skills', label: t('footer.skills') },
    { href: '/#experience', label: t('footer.experience') },
    { href: '/projects', label: t('footer.projects') },
    { href: '/blog', label: t('footer.blog') },
    { href: '/#contact', label: t('footer.contact') },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/laithkallash', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/laith-kalash-3635b5254', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/flutterwithlaith', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.tiktok.com/@laithtech', label: 'TikTok' },
    { icon: Mail, href: 'mailto:la24ithdev@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container-custom py-8 lg:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-white font-mono text-sm font-bold">
                LK
              </div>
              <span className="font-display font-bold">Laith Kallash</span>
            </Link>
            <p className="text-sm text-[#5f6b7d] mt-2">
              {t('about.role')}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div>
              <h4 className="text-xs font-mono text-[#5f6b7d] uppercase tracking-wider mb-3">
                {t('footer.quickLinks')}
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#9aa7b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#5f6b7d] uppercase tracking-wider mb-3">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#9aa7b8] hover:text-[#27c6da] hover:border-[#27c6da]/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-[#5f6b7d]">
            &copy; {year} Laith Kallash. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-[#5f6b7d] font-mono">
              Built with ❤️ using Flutter & Next.js
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#9aa7b8] hover:text-[#27c6da] hover:border-[#27c6da]/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}