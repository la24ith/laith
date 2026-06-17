// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { href: '/#about', label: t('nav.about') },
    { href: '/#skills', label: t('nav.skills') },
    { href: '/#experience', label: t('nav.experience') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/#services', label: t('nav.services') },
    { href: '/#content', label: t('nav.content') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e14]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-white font-mono text-sm font-bold">
              LK
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Laith Kallash
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.href ? 'text-[#27c6da]' : 'text-[#9aa7b8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-[#27c6da]/40 transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'EN' : 'AR'}</span>
            </button>

            <Link
              href="/#contact"
              className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-[#27c6da] text-[#04101f] font-semibold text-sm transition-all hover:shadow-[0_8px_20px_rgba(39,198,218,0.25)] hover:-translate-y-0.5"
            >
              {t('nav.hire')}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-white/10 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5 ${
                  pathname === link.href ? 'text-[#27c6da]' : 'text-[#9aa7b8]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block px-4 py-3 mt-2 rounded-lg bg-[#27c6da] text-[#04101f] font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.hire')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}