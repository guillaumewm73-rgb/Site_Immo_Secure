import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { benefits, ctaLabels } from '@/content/siteContent';
import { BoltIcon, CalendarIcon, ChartIcon, CheckIcon, ShieldIcon, UserGearIcon } from '@/components/ui/Icons';

const icons = [ChartIcon, CalendarIcon, UserGearIcon, CheckIcon, BoltIcon, ShieldIcon];

export function BenefitsSection() {
  return (
    <section id="benefices" className="section-space">
      <Container>
        <SectionHeader
          title="Ce que vous gagnez concrètement"
          description="Plus de signatures, moins de pertes, un suivi commercial net."
          kicker="Bénéfices"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index] ?? CheckIcon;
            return (
              <article
                key={benefit.title}
                className="panel p-5 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card"
              >
                <div className="inline-flex rounded-lg border border-line bg-surface p-2 text-deep">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink sm:text-xl">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{benefit.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            {ctaLabels.primary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
