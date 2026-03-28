import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CredibilitySection } from '@/components/sections/CredibilitySection';
import { DifferentiationSection } from '@/components/sections/DifferentiationSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { SiteHeader } from '@/components/sections/SiteHeader';
import { SolutionSection } from '@/components/sections/SolutionSection';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ComparisonSection />
        <BenefitsSection />
        <ProcessSection />
        <DifferentiationSection />
        <CredibilitySection />
        <FaqSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
