import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ClientProviders from '@/components/ClientProviders';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#487a1a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'termite control',
    'anti termite treatment',
    'pest control',
    'termite treatment Dehradun',
    'pre construction soil treatment',
    'drill fill seal',
    'anti termite piping',
    'pipe refill termite',
    'pest control near me',
    'waterproofing Dehradun',
    'terrace waterproofing',
    'basement waterproofing',
    'leakage solution Dehradun',
    'injection grouting',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Doon Earth Solution — Expert Termite Control & Waterproofing in Dehradun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.jpeg', type: 'image/jpeg', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/hero-side.jpg`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Dehradun' },
      { '@type': 'State', name: 'Uttarakhand' },
    ],
    openingHours: 'Mo-Sa 09:00-19:00',
    sameAs: Object.values(site.social).filter((u) => u && u !== '#'),
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bone-50 text-ink-900 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ClientProviders />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
