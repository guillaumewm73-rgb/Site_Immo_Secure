import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { benefits } from '@/content/siteContent';
import { BoltIcon, CalendarIcon, ChartIcon, CheckIcon } from '@/components/ui/Icons';

const icons = [ChartIcon, CalendarIcon, BoltIcon, CheckIcon];

export function BenefitsSection() {
  return (
    <section id="resultats" className="section-space section-dark">
      <Container>
        <SectionHeader
          title="Les résultats que le prospect ressent et que votre agence récupère"
          description="Moins d’attente, moins d’oubli, plus de rendez-vous réellement traités."
          kicker="Résultats"
          align="center"
          theme="dark"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = icons[index] ?? CheckIcon;

            return (
              <article key={benefit.title} className="metric-card min-w-0 border-line bg-white p-6 sm:p-7">
                <div className="icon-chip">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink [overflow-wrap:anywhere]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-steel [overflow-wrap:anywhere]">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
