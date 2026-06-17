// contexts/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.content': 'Content',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    'hero.badge': 'Available for Freelance',
    'hero.title': 'Building',
    'hero.title.gradient': 'Cross-Platform Apps',
    'hero.subtitle': 'Senior Flutter Developer crafting high-performance mobile applications with Clean Architecture and modern best practices.',
    'hero.projects': 'View Projects',
    'hero.hire': 'Hire Me',
    'hero.stats.projects': 'Projects',
    'hero.stats.apps': 'Apps',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.clients': 'Happy Clients',

    'about.title': 'About Me',
    'about.subtitle': 'Passionate Flutter developer dedicated to building exceptional mobile experiences',
    'about.role': 'Senior Flutter Developer',
    'about.location': 'Aleppo, Syria',
    'about.availability': 'Available for freelance',
    'about.experience': '4+ years experience',
    'about.description': 'I am a passionate Flutter developer with a strong focus on creating high-performance, cross-platform mobile applications. I believe in writing clean, maintainable code and following best practices to deliver exceptional user experiences.',
    'about.focus.title': 'Core Focus Areas',
    'about.focus.architecture': 'Clean Architecture',
    'about.focus.state': 'State Management',
    'about.focus.api': 'API Integration',
    'about.focus.firebase': 'Firebase Services',
    'about.focus.performance': 'Performance Optimization',
    'about.focus.animation': 'Custom Animations',
    'about.support.title': 'Services',
    'about.support.qa': 'QA Engineering',
    'about.support.it': 'IT Support',

    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Technologies and tools I work with to build modern mobile applications',
    'skills.primary': 'Core Technologies',
    'skills.state': 'State Management',
    'skills.backend': 'Backend & APIs',
    'skills.tools': 'Development Tools',
    'skills.primary.tag': 'Expert',

    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey in software development',
    'experience.current': 'Current',
    'experience.octo': 'Flutter Developer at OCTO Tech',
    'experience.octo.desc': 'Building cross-platform Flutter applications with Clean Architecture and modern state management.',
    'experience.octo.responsibilities': 'Developing cross-platform mobile apps with Flutter, Implementing Clean Architecture and BLoC patterns, Integrating REST APIs and Firebase services, Optimizing app performance and user experience',
    'experience.qa': 'QA & Testing Engineer',
    'experience.it': 'IT Support Specialist',
    'experience.education': 'University Education',
    'experience.university': 'Computer Science & Software Engineering',

    'projects.title': 'Projects',
    'projects.subtitle': 'Some of the projects I have worked on recently',
    'projects.viewAll': 'View All Projects',

    'services.title': 'Services',
    'services.subtitle': 'What I can do for you',
    'services.app': 'Mobile App Development',
    'services.app.desc': 'Building high-quality cross-platform mobile applications using Flutter & Dart.',
    'services.consulting': 'Technical Consulting',
    'services.consulting.desc': 'Expert guidance on Flutter architecture, state management, and best practices.',
    'services.migration': 'App Migration',
    'services.migration.desc': 'Migrating existing apps to Flutter for better performance and cross-platform compatibility.',
    'services.optimization': 'Performance Optimization',
    'services.optimization.desc': 'Identifying and fixing performance issues for smoother user experiences.',
    'services.maintenance': 'App Maintenance',
    'services.maintenance.desc': 'Ongoing support, bug fixes, and feature enhancements for existing apps.',
    'services.team': 'Team Training',
    'services.team.desc': 'Training development teams on Flutter best practices and modern development workflows.',

    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What people say about working with me',

    'github.title': 'GitHub',
    'github.subtitle': 'Open source contributions and projects',
    'github.view': 'View All',
    'github.repos': 'Repositories',
    'github.contributions': 'Contributions',

    'cta.title': 'Ready to Build Something Great?',
    'cta.subtitle': "Let's discuss your next mobile project. I'm available for freelance work.",
    'cta.consult': 'Book Consultation',
    'cta.contact': 'Contact Me',

    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch for your next project',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.instagram': 'Instagram',
    'contact.name': 'Your Name',
    'contact.email.label': 'Your Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.note': "I'll get back to you within 24 hours",

    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.skills': 'Skills',
    'footer.experience': 'Experience',
    'footer.projects': 'Projects',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved',

    'blog.title': 'Blog',
  },
  ar: {
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.services': 'الخدمات',
    'nav.content': 'المحتوى',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بي',
    'nav.hire': 'توظيفي',
    
    'hero.badge': 'متاح للعمل الحر',
    'hero.title': 'بناء',
    'hero.title.gradient': 'تطبيقات متعددة المنصات',
    'hero.subtitle': 'مطور Flutter محترف يصنع تطبيقات عالية الأداء باستخدام Clean Architecture وأفضل الممارسات الحديثة.',
    'hero.projects': 'عرض المشاريع',
    'hero.hire': 'توظيفي',
    'hero.stats.projects': 'مشاريع',
    'hero.stats.apps': 'تطبيقات',
    'hero.stats.experience': 'سنوات خبرة',
    'hero.stats.clients': 'عملاء سعداء',

    'about.title': 'عني',
    'about.subtitle': 'مطور Flutter شغوف بتقديم تجارب مميزة',
    'about.role': 'مطور Flutter محترف',
    'about.location': 'حلب، سوريا',
    'about.availability': 'متاح للعمل الحر',
    'about.experience': 'أكثر من 4 سنوات خبرة',
    'about.description': 'أنا مطور Flutter شغوف بإنشاء تطبيقات عالية الأداء. أؤمن بكتابة كود نظيف وقابل للصيانة واتباع أفضل الممارسات لتقديم تجارب مستخدم استثنائية.',
    'about.focus.title': 'مجالات التركيز الأساسية',
    'about.focus.architecture': 'الهندسة النظيفة',
    'about.focus.state': 'إدارة الحالة',
    'about.focus.api': 'تكامل APIs',
    'about.focus.firebase': 'خدمات Firebase',
    'about.focus.performance': 'تحسين الأداء',
    'about.focus.animation': 'رسوم متحركة مخصصة',
    'about.support.title': 'الخدمات',
    'about.support.qa': 'هندسة ضمان الجودة',
    'about.support.it': 'الدعم التقني',

    'skills.title': 'المهارات',
    'skills.subtitle': 'التقنيات والأدوات التي أعمل بها',
    'skills.primary': 'التقنيات الأساسية',
    'skills.state': 'إدارة الحالة',
    'skills.backend': 'الباكند و APIs',
    'skills.tools': 'أدوات التطوير',
    'skills.primary.tag': 'خبير',

    'experience.title': 'الخبرات',
    'experience.subtitle': 'رحلتي المهنية في تطوير البرمجيات',
    'experience.current': 'الحالي',
    'experience.octo': 'مطور Flutter في OCTO Tech',
    'experience.octo.desc': 'بناء تطبيقات متعددة المنصات باستخدام Flutter مع Clean Architecture وإدارة الحالة الحديثة.',
    'experience.octo.responsibilities': 'تطوير تطبيقات متعددة المنصات باستخدام Flutter, تنفيذ Clean Architecture وأنماط BLoC, دمج REST APIs وخدمات Firebase, تحسين أداء التطبيق وتجربة المستخدم',
    'experience.qa': 'مهندس ضمان جودة واختبارات',
    'experience.it': 'أخصائي دعم تقني',
    'experience.education': 'التعليم الجامعي',
    'experience.university': 'علوم الحاسوب وهندسة البرمجيات',

    'projects.title': 'المشاريع',
    'projects.subtitle': 'بعض المشاريع التي عملت عليها مؤخراً',
    'projects.viewAll': 'عرض كل المشاريع',

    'services.title': 'الخدمات',
    'services.subtitle': 'ماذا يمكنني أن أقدم لك',
    'services.app': 'تطوير تطبيقات الجوال',
    'services.app.desc': 'بناء تطبيقات عالية الجودة متعددة المنصات باستخدام Flutter و Dart.',
    'services.consulting': 'استشارات تقنية',
    'services.consulting.desc': 'إرشاد خبراء في هندسة Flutter وإدارة الحالة وأفضل الممارسات.',
    'services.migration': 'هجرة التطبيقات',
    'services.migration.desc': 'هجرة التطبيقات الحالية إلى Flutter لأداء أفضل وتوافق متعدد المنصات.',
    'services.optimization': 'تحسين الأداء',
    'services.optimization.desc': 'تحديد وإصلاح مشاكل الأداء لتجارب مستخدم أكثر سلاسة.',
    'services.maintenance': 'صيانة التطبيقات',
    'services.maintenance.desc': 'دعم مستمر وإصلاح الأخطاء وإضافة ميزات جديدة للتطبيقات الحالية.',
    'services.team': 'تدريب الفرق',
    'services.team.desc': 'تدريب فرق التطوير على أفضل ممارسات Flutter وسير العمل الحديثة.',

    'testimonials.title': 'آراء العملاء',
    'testimonials.subtitle': 'ماذا يقول الناس عن العمل معي',

    'github.title': 'جيت هاب',
    'github.subtitle': 'المساهمات والمشاريع مفتوحة المصدر',
    'github.view': 'عرض الكل',
    'github.repos': 'المستودعات',
    'github.contributions': 'المساهمات',

    'cta.title': 'هل أنت مستعد لبناء شيء رائع؟',
    'cta.subtitle': 'لنتحدث عن مشروعك القادم. أنا متاح للعمل الحر.',
    'cta.consult': 'احجز استشارة',
    'cta.contact': 'اتصل بي',

    'contact.title': 'اتصل بي',
    'contact.subtitle': 'تواصل لمشروعك القادم',
    'contact.email': 'البريد الإلكتروني',
    'contact.linkedin': 'لينكد إن',
    'contact.github': 'جيت هاب',
    'contact.instagram': 'إنستغرام',
    'contact.name': 'اسمك',
    'contact.email.label': 'بريدك الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.note': 'سأرد عليك خلال 24 ساعة',

    'footer.home': 'الرئيسية',
    'footer.about': 'عني',
    'footer.skills': 'المهارات',
    'footer.experience': 'الخبرات',
    'footer.projects': 'المشاريع',
    'footer.blog': 'المدونة',
    'footer.contact': 'اتصل بي',
    'footer.quickLinks': 'روابط سريعة',
    'footer.rights': 'جميع الحقوق محفوظة',

    'blog.title': 'المدونة',
  }
};

// ✅ تعريف الأنواع مرة واحدة فقط
type TranslationKey = keyof typeof translations.en;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // ✅ دالة الترجمة مع تحديد النوع الصحيح
  const t = (key: string): string => {
    const translation = translations[language];
    return translation[key as TranslationKey] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
