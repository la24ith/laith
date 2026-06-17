// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cairo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://laithkallash.dev'),
  title: {
    default: 'Laith Kallash — Senior Flutter Developer & Mobile Engineer',
    template: '%s | Laith Kallash'
  },
  description: 'Senior Flutter Developer building high-performance, cross-platform mobile applications with Flutter & Dart. Clean Architecture, Firebase, REST APIs, and modern UI.',
  keywords: [
    'Flutter Developer',
    'Senior Flutter Developer',
    'Mobile Application Developer',
    'Flutter Engineer',
    'Flutter Freelancer',
    'Flutter Developer Syria',
    'Dart Developer',
    'Cross Platform Developer',
    'Flutter Consultant',
    'Mobile App Developer'
  ],
  authors: [{ name: 'Laith Kallash' }],
  creator: 'Laith Kallash',
  publisher: 'Laith Kallash',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://laithkallash.dev',
    title: 'Laith Kallash — Senior Flutter Developer & Mobile Engineer',
    description: 'Building high-performance, cross-platform mobile applications with Flutter & Dart.',
    siteName: 'Laith Kallash Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laith Kallash — Senior Flutter Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laith Kallash — Senior Flutter Developer',
    description: 'Building high-performance, cross-platform mobile applications with Flutter & Dart.',
    images: ['/og-image.jpg'],
    creator: '@laithkallash'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  },
  alternates: {
    canonical: 'https://laithkallash.dev',
    languages: {
      'en': 'https://laithkallash.dev',
      'ar': 'https://laithkallash.dev/ar'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Laith Kallash',
              jobTitle: 'Senior Flutter Developer & Mobile Engineer',
              url: 'https://laithkallash.dev',
              sameAs: [
                'https://www.linkedin.com/in/laith-kalash-3635b5254',
                'https://github.com/laithkallash',
                'https://www.instagram.com/flutterwithlaith',
                'https://www.tiktok.com/@laithtech'
              ],
              knowsAbout: [
                'Flutter',
                'Dart',
                'Mobile App Development',
                'Cross Platform Development',
                'Firebase',
                'REST APIs',
                'Clean Architecture',
                'State Management'
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Aleppo'
              },
              worksFor: {
                '@type': 'Organization',
                name: 'OCTO Tech'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0e14] text-[#e8f4ff] font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}