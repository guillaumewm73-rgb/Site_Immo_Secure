import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BoltIcon, CheckIcon, ShieldIcon } from '@/components/ui/Icons';
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

        <div className="mt-8 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <article className="panel border-rose-200 bg-rose-50 p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-600">Sans système</p>
            <ul className="mt-4 space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm font-medium text-rose-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="flex justify-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-xl font-semibold text-accent">
              →
            </div>
          </div>

          <article className="panel border-emerald-200 bg-emerald-50 p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">Avec Immo Secure</p>
            <ul className="mt-4 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-emerald-800"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {visualPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="panel p-5 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <div className="inline-flex rounded-lg border border-line bg-surface p-2 text-deep">
                {index === 0 ? <BoltIcon /> : index === 1 ? <ShieldIcon /> : <CheckIcon />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
