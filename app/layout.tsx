import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { company, seoContent } from '@/content/siteContent';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(seoContent.siteUrl),
  applicationName: seoContent.shortTitle,
  title: {
    default: seoContent.title,
    template: `%s | ${seoContent.shortTitle}`
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  referrer: 'origin-when-cross-origin',
  category: 'business',
  creator: company.founder,
  publisher: company.agency,
  authors: [{ name: company.founder }],
  alternates: {
    canonical: seoContent.siteUrl
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.socialDescription,
    type: 'website',
    locale: seoContent.locale,
    url: seoContent.siteUrl,
    siteName: seoContent.shortTitle,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: seoContent.ogImageAlt
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.socialDescription,
    images: ['/opengraph-image']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${manrope.variable} ${fraunces.variable} bg-surface font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
