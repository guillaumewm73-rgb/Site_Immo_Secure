import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRightIcon, BoltIcon, CheckIcon, ShieldIcon } from '@/components/ui/Icons';
import { comparisonContent, ctaLabels } from '@/content/siteContent';

const beforeItems = [
  'Leads traités trop tard',
  'Relances irrégulières',
  'Mandats perdus sans visibilité'
];

const afterItems = [
  'Réponse immédiate aux demandes entrantes',
  'Relances estimations automatiques',
  'Pipeline commercial suivi en continu'
];

const visualPillars = [
  {
    title: 'Réponse instantanée',
    text: 'Le prospect reçoit une réponse dès son entrée.'
  },
  {
    title: 'Suivi automatique',
    text: 'Aucune estimation ne sort du radar.'
  },
  {
    title: 'Opportunités sécurisées',
    text: 'Chaque lead suit un process clair jusqu’à décision.'
  }
];

export function ComparisonSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <SectionHeader
          kicker="Visualisation"
          title={comparisonContent.title}
          description={comparisonContent.description}
          align="center"
        />

        <div className="mt-10 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <article className="min-w-0 rounded-[2rem] border border-rose-200 bg-rose-50/90 p-6 shadow-soft sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600">Sans système</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-rose-900">Réactivité subie</h3>
            <ul className="mt-6 space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="rounded-[1.25rem] border border-rose-200 bg-white/95 px-5 py-4 text-sm font-medium text-rose-700 shadow-soft [overflow-wrap:anywhere]">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="flex justify-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-xl font-semibold text-deep shadow-soft">
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          </div>

          <article className="min-w-0 rounded-[2rem] border border-deep/10 bg-deep p-6 text-white shadow-card sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Avec Immo Secure</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Pipeline commercial sécurisé</h3>
            <ul className="mt-6 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/12 bg-white/10 px-5 py-4 text-sm font-medium text-white/95"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4" />
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visualPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="metric-card min-w-0 p-6"
            >
              <div className="icon-chip">
                {index === 0 ? <BoltIcon /> : index === 1 ? <ShieldIcon /> : <CheckIcon />}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink [overflow-wrap:anywhere]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 [overflow-wrap:anywhere] sm:text-base">{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
