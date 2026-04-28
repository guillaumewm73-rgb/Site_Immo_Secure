import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { benefits, resultMetrics } from '@/content/siteContent';
import { BoltIcon, CalendarIcon, ChartIcon, CheckIcon } from '@/components/ui/Icons';

const icons = [ChartIcon, CalendarIcon, BoltIcon, CheckIcon];

export function BenefitsSection() {
  return (
    <section id="resultats" className="section-space section-dark">
      <Container>
        <SectionHeader
          title="Les résultats que le prospect ressent et que votre agence récupère"
          description="Moins d’attente, plus de rendez-vous, plus de mandats récupérés."
          kicker="Résultats"
          align="center"
          theme="dark"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resultMetrics.map((metric) => (
            <article key={metric.label} className="panel-dark p-6 text-center sm:p-7">
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{metric.value}</p>
              <p className="mt-3 section-kicker text-white/82">{metric.label}</p>
              <p className="mt-2 text-sm text-white/84">{metric.context}</p>
            </article>
          ))}
        </div>

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
