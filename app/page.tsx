// app/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import GitHub from '@/components/sections/GitHub';
import LinkedIn from '@/components/sections/LinkedIn';
import Achievements from '@/components/sections/Achievements';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const { dir } = useLanguage();

  return (
    <div className={dir === 'rtl' ? 'rtl' : 'ltr'}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <GitHub />
      <LinkedIn />
      <Achievements />
      <CTA />
      <Contact />
    </div>
  );
}