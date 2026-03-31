import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { heroContent, heroSignals } from '@/content/siteContent';

const processFlow = [
  {
    title: 'Lead entrant',
    text: 'Demande site, portail ou appel.'
  },
  {
    title: 'Réponse instantanée',
    text: 'Qualification immédiate, sans attente.'
  },
  {
    title: 'Rendez-vous',
    text: 'Visite proposée au bon moment.'
  },
  {
    title: 'Mandat signé',
    text: 'L’opportunité est traitée jusqu’au bout.'
  }
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <p className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel">
              {heroContent.microProof}
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-6xl">
                {heroContent.title}
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                {heroContent.subtitle}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroSignals.map((item) => (
                <div key={item.label} className="panel-muted px-4 py-3 transition duration-300 ease-smooth hover:-translate-y-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={heroContent.primaryCta.href} className="btn-primary sm:flex-1">
                {heroContent.primaryCta.label}
              </Link>
              <Link href={heroContent.secondaryCta.href} className="btn-secondary sm:w-auto">
                {heroContent.secondaryCta.label}
              </Link>
            </div>

            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
              {heroContent.tension}
            </p>
          </div>

          <div className="panel p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Process de conversion
            </p>

            <div className="mt-4 space-y-2">
              {processFlow.map((step, index) => (
                <div key={step.title}>
                  <div className="panel-muted p-3 sm:p-4">
                    <p className="text-sm font-semibold text-ink sm:text-base">{step.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{step.text}</p>
                  </div>
                  {index < processFlow.length - 1 ? (
                    <div className="flex justify-center py-1 text-lg font-semibold text-accent">↓</div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
              Le système ne remplace pas l’agence. Il l’aide à intervenir exactement au bon moment.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
