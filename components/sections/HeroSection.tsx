import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MessageIcon
} from '@/components/ui/Icons';
import { ctaLabels, heroContent } from '@/content/siteContent';

const beforeFlow = [
  {
    title: 'Lead entrant',
    text: 'Demande chaude qui attend.',
    icon: MessageIcon
  },
  {
    title: 'Attente',
    text: 'Pas de réponse immédiate.',
    icon: ClockIcon
  },
  {
    title: 'Oubli',
    text: 'Le suivi sort du radar.',
    icon: ClockIcon
  },
  {
    title: 'Mandat perdu',
    text: 'Le concurrent passe devant.',
    icon: ArrowRightIcon
  }
];

const afterFlow = [
  {
    title: 'Lead entrant',
    text: 'Demande captée immédiatement.',
    icon: MessageIcon
  },
  {
    title: 'Réponse',
    text: 'Retour en moins de 60 secondes.',
    icon: BoltIcon
  },
  {
    title: 'RDV',
    text: 'Le prospect avance sans friction.',
    icon: CalendarIcon
  },
  {
    title: 'Mandat',
    text: 'L’opportunité est sécurisée.',
    icon: CheckIcon
  }
];

const proofMetrics = [
  {
    value: '38',
    label: 'leads / mois'
  },
  {
    value: '52 sec',
    label: 'première réponse'
  },
  {
    value: '+4',
    label: 'mandats récupérés'
  }
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-14 pt-8 sm:pb-16 sm:pt-10 md:pt-14 lg:pb-20 lg:pt-16 xl:pb-24 xl:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft opacity-45" />
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-14">
          <div className="reveal-up space-y-7 sm:space-y-8">
            <p className="eyebrow shadow-card">Perte invisible</p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-balance text-[2.85rem] font-semibold leading-[0.92] tracking-[-0.04em] text-ink sm:text-[4rem] lg:max-w-[33rem] lg:text-[4.35rem] xl:max-w-4xl xl:text-[5rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-steel sm:text-xl lg:max-w-[34rem] xl:text-[1.34rem]">
                {heroContent.subtitle}
              </p>
            </div>

            <p className="panel-danger max-w-2xl px-5 py-4 text-sm font-semibold text-rose-900 sm:text-base">
              {heroContent.tension}
            </p>

            <div className="panel inline-flex max-w-2xl flex-col gap-3 p-3 sm:p-4">
              <Link
                href={heroContent.primaryCta.href}
                className="btn-primary min-h-[64px] w-full justify-center text-base sm:w-auto sm:min-w-[320px] sm:px-8 sm:text-lg"
              >
                {heroContent.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <p className="px-2 text-sm font-medium text-steel sm:text-base">{ctaLabels.helper}</p>
            </div>
          </div>

          <div className="reveal-up relative lg:pt-2" style={{ animationDelay: '0.12s' }}>
            <div className="panel float-soft relative overflow-hidden border border-line bg-white p-5 sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:34px_34px] opacity-40" />

              <div className="relative space-y-5">
                <div className="space-y-3">
                  <p className="section-kicker text-accent">
                    Compréhension instantanée
                  </p>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    Le mandat se gagne dans les premières minutes.
                  </h2>
                </div>

                <div className="panel-danger p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="section-kicker text-rose-600">Avant</p>
                    <p className="text-xs font-semibold text-rose-700">Lead chaud qui refroidit</p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {beforeFlow.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={step.title}
                          className="flow-card border-rose-200 bg-white/95 p-4 shadow-none"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                            <Icon className="h-4 w-4" />
                          </span>
                          <p className="mt-3 text-sm font-semibold text-rose-900">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-rose-700">{step.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="panel-contrast overflow-hidden p-4 text-white sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="section-kicker text-white/75">Après</p>
                    <p className="text-xs font-semibold text-white/85">Réponse, RDV, mandat</p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {afterFlow.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={step.title}
                          className="rounded-[1rem] border border-white/15 bg-white/10 p-4"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/82">{step.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {proofMetrics.map((item) => (
                    <div key={item.label} className="panel-muted px-4 py-4 text-center">
                      <p className="text-xl font-semibold text-ink">{item.value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-steel">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
