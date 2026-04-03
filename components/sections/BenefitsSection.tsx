import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { benefits } from '@/content/siteContent';
import { BoltIcon, CalendarIcon, ChartIcon, CheckIcon } from '@/components/ui/Icons';

const icons = [ChartIcon, CalendarIcon, BoltIcon, CheckIcon];

export function BenefitsSection() {
  return (
    <section id="resultats" className="section-space">
      <Container>
        <SectionHeader
          title="Ce que cela change pour votre agence"
          description="Moins de pertes. Plus de constance. Plus de mandats."
          kicker="Résultats"
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = icons[index] ?? CheckIcon;
            return (
              <article
                key={benefit.title}
                className="metric-card min-w-0 p-6 sm:p-7"
              >
                <div className="icon-chip">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink [overflow-wrap:anywhere]">{benefit.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 [overflow-wrap:anywhere]">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
