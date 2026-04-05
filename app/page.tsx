import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { DemoSection } from '@/components/sections/DemoSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { SiteHeader } from '@/components/sections/SiteHeader';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { company, seoContent } from '@/content/siteContent';

const title = 'Ne perdez plus de mandats faute de réponse rapide';
const description =
  'Immo Secure aide les agences immobilières à répondre en moins de 60 secondes, relancer automatiquement les estimations et récupérer les mandats perdus faute de suivi.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: seoContent.siteUrl
  },
  openGraph: {
    title: `${title} | ${seoContent.shortTitle}`,
    description
  },
  twitter: {
    title: `${title} | ${seoContent.shortTitle}`,
    description
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${seoContent.siteUrl}/#organization`,
        name: company.agency,
        alternateName: company.offerName,
        url: seoContent.siteUrl,
        logo: `${seoContent.siteUrl}/logo.png`,
        description: seoContent.description,
        founder: company.founder,
        sameAs: [company.linkedinUrl],
        email: company.email,
        telephone: company.phoneHref,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: company.email,
            telephone: company.phoneHref,
            availableLanguage: ['French']
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${seoContent.siteUrl}/#website`,
        url: seoContent.siteUrl,
        name: seoContent.shortTitle,
        description: seoContent.description,
        inLanguage: seoContent.language,
        publisher: {
          '@id': `${seoContent.siteUrl}/#organization`
        }
      },
      {
        '@type': 'Service',
        '@id': `${seoContent.siteUrl}/#service`,
        name: `${company.agency} ${company.offerName}`,
        serviceType: 'Automatisation de la réponse aux leads et relance des estimations pour agences immobilières',
        description: seoContent.description,
        provider: {
          '@id': `${seoContent.siteUrl}/#organization`
        },
        areaServed: {
          '@type': 'Country',
          name: 'France'
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Agences immobilières indépendantes'
        },
        inLanguage: seoContent.language,
        knowsAbout: seoContent.keywords
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <SolutionSection />
        <BenefitsSection />
        <DemoSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
