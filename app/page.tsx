import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CredibilitySection } from '@/components/sections/CredibilitySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { SiteHeader } from '@/components/sections/SiteHeader';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { company, seoContent } from '@/content/siteContent';

const title = 'Réponse instantanée et relance des estimations pour agences immobilières';
const description =
  'Améliorez le suivi commercial de votre agence immobilière indépendante avec un système qui répond immédiatement aux leads, relance les estimations et aide à récupérer plus de mandats.';

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
        <SolutionSection />
        <BenefitsSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
