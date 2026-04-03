import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRightIcon,
  BellIcon,
  BoltIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MessageIcon,
  ShieldIcon
} from '@/components/ui/Icons';
import { heroContent, heroSignals } from '@/content/siteContent';

const processFlow = [
  {
    title: 'Lead entrant',
    text: 'Demande site, portail ou appel.',
    icon: MessageIcon
  },
  {
    title: 'Réponse instantanée',
    text: 'Qualification immédiate, sans attente.',
    icon: BoltIcon
  },
  {
    title: 'Rendez-vous',
    text: 'Visite proposée au bon moment.',
    icon: CalendarIcon
  },
  {
    title: 'Mandat signé',
    text: 'L’opportunité est traitée jusqu’au bout.',
    icon: CheckIcon
  }
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />
      <div className="pointer-events-none absolute left-[-12%] top-20 -z-10 h-64 w-64 rounded-full bg-accent/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] -z-10 h-80 w-80 rounded-full bg-deep/8 blur-3xl" />
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="reveal-up space-y-7 sm:space-y-8">
            <p className="eyebrow">
              {heroContent.microProof}
            </p>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-[2.85rem] font-semibold leading-[0.9] tracking-[-0.05em] text-ink sm:text-[4rem] lg:text-[4.65rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl lg:text-[1.45rem]">
                {heroContent.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={heroContent.primaryCta.href} className="btn-primary min-w-[280px] justify-center sm:min-w-0 sm:flex-1">
                {heroContent.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href={heroContent.secondaryCta.href} className="btn-secondary sm:w-auto">
                {heroContent.secondaryCta.label}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-steel">
              <span className="rounded-full border border-line/80 bg-white/80 px-4 py-2 shadow-soft">
                Diagnostic en 30 min
              </span>
              <span className="rounded-full border border-line/80 bg-white/80 px-4 py-2 shadow-soft">
                Compatible avec vos outils actuels
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroSignals.map((item) => (
                <div key={item.label} className="metric-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-ink sm:text-base">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-rose-200/80 bg-rose-50/90 px-5 py-4 text-sm font-semibold text-rose-700 shadow-soft sm:text-base">
              {heroContent.tension}
            </div>
          </div>

          <div className="reveal-up relative lg:pt-4" style={{ animationDelay: '0.12s' }}>
            <div className="float-soft pointer-events-none absolute -right-4 top-8 hidden rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold text-steel shadow-soft sm:inline-flex">
              <ClockIcon className="h-4 w-4" />
              <span>Réponse priorisée en quelques secondes</span>
            </div>

            <div className="panel relative overflow-hidden border border-white/90 bg-white/80 p-6 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:34px_34px] opacity-35" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Flow de conversion
                    </p>
                    <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      Lead → réponse → RDV → mandat
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                      Une vue claire du parcours à sécuriser pour capter les opportunités avant qu’elles ne partent.
                    </p>
                  </div>
                  <div className="rounded-full border border-accent/40 bg-accent-soft/70 px-4 py-2 text-sm font-semibold text-deep shadow-soft">
                    Process visible, actionnable, mémorable
                  </div>
                </div>

                <div className="relative mt-8 hidden lg:block">
                  <div className="pointer-events-none absolute left-[11%] right-[11%] top-11 h-px bg-gradient-to-r from-deep/0 via-accent/70 to-deep/0" />
                  <div className="grid grid-cols-4 gap-4">
                    {processFlow.map((step, index) => {
                      const Icon = step.icon;
                      const isLast = index === processFlow.length - 1;

                      return (
                        <div
                          key={step.title}
                          className={`flow-card ${isLast ? 'border-accent/45 bg-accent-soft/55' : 'bg-white/95'}`}
                        >
                          <div className="icon-chip">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Étape {index + 1}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-ink">{step.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 space-y-3 lg:hidden">
                  {processFlow.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div key={step.title}>
                        <div className="flow-card flex items-start gap-4">
                          <div className="icon-chip shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Étape {index + 1}
                            </p>
                            <p className="mt-1 text-lg font-semibold text-ink">{step.title}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                          </div>
                        </div>
                        {index < processFlow.length - 1 ? (
                          <div className="flex justify-center py-2 text-lg font-semibold text-accent">↓</div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[1.75rem] border border-deep/10 bg-deep p-5 text-white shadow-card">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                        <BellIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          Notification utile
                        </p>
                        <p className="mt-2 text-lg font-semibold">Lead chaud détecté. Rappel prioritaire conseillé.</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          Le système ne remplace pas l’agence. Il la fait intervenir au moment où elle a le plus d’impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel-muted border border-white/90 bg-white/90 p-5 shadow-soft">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Lecture rapide
                    </p>
                    <ul className="mt-4 space-y-3 text-sm font-medium text-slate-700">
                      <li className="flex items-center gap-2">
                        <ShieldIcon className="h-4 w-4 text-accent-strong" />
                        <span>Réactivité visible</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BoltIcon className="h-4 w-4 text-accent-strong" />
                        <span>Qualification immédiate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-accent-strong" />
                        <span>Passage au RDV plus fluide</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
