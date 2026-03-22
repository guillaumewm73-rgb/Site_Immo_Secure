import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
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
  metadataBase: new URL('https://immosecure.fr'),
  title: 'Immo Secure | Récupérez les mandats que votre agence perd',
  description:
    'Immo Secure aide les agences immobilières indépendantes à répondre instantanément et relancer leurs estimations pour signer plus de mandats.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Immo Secure | Zéro Opportunité Perdue',
    description:
      'Chaque lead non relancé peut coûter un mandat. Immo Secure sécurise votre suivi commercial.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://immosecure.fr'
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
