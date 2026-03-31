import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, urgencyContent } from '@/content/siteContent';

export function UrgencySection() {
  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-deep/20 bg-gradient-to-br from-deep to-steel px-6 py-8 text-white shadow-card sm:px-10 sm:py-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <SectionHeader
              kicker="Pourquoi agir maintenant"
              title={urgencyContent.title}
              description={urgencyContent.description}
              theme="dark"
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {urgencyContent.items.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 text-sm font-medium text-white/90">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-slate-100">
                {ctaLabels.secondary}
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/18 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-white/8">
                {ctaLabels.primary}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
