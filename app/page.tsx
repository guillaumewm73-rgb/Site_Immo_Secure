import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CredibilitySection } from '@/components/sections/CredibilitySection';
import { DeliverablesSection } from '@/components/sections/DeliverablesSection';
import { DemoSection } from '@/components/sections/DemoSection';
import { DifferentiationSection } from '@/components/sections/DifferentiationSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ProofStripSection } from '@/components/sections/ProofStripSection';
import { ScenarioSection } from '@/components/sections/ScenarioSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { SiteHeader } from '@/components/sections/SiteHeader';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { UrgencySection } from '@/components/sections/UrgencySection';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofStripSection />
        <DemoSection />
        <ProblemSection />
        <ScenarioSection />
        <SolutionSection />
        <DeliverablesSection />
        <ComparisonSection />
        <BenefitsSection />
        <UrgencySection />
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
