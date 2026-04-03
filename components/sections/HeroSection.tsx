import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarIcon,
  CheckIcon,
  MessageIcon
} from '@/components/ui/Icons';
import { bookingCta, ctaLabels, heroContent } from '@/content/siteContent';

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
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 md:pt-40 tablet:pb-20 lg:pb-24 lg:pt-32 xl:pb-28 xl:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft opacity-80" />
      <Container>
        <div className="grid items-start gap-12 tablet:gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-9 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          <div className="reveal-up space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <h1 className="max-w-4xl text-balance text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-ink sm:text-[4rem] tablet:max-w-3xl tablet:text-[3.55rem] lg:max-w-[30rem] lg:text-[4.15rem] xl:max-w-4xl xl:text-[5rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-steel sm:text-xl tablet:max-w-2xl tablet:text-[1.1rem] lg:max-w-[28rem] lg:text-[1.14rem] xl:max-w-xl xl:text-[1.35rem]">
                {heroContent.subtitle}
              </p>
            </div>

            <p className="max-w-lg rounded-[1.5rem] border border-accent/15 bg-white px-5 py-4 text-sm font-semibold text-ink shadow-soft sm:text-base tablet:max-w-[32rem] lg:max-w-[27rem] xl:max-w-lg">
              {heroContent.tension}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:max-w-2xl sm:flex-row sm:flex-wrap">
                <a
                  href={bookingCta.href}
                  target={bookingCta.isExternal ? '_blank' : undefined}
                  rel={bookingCta.isExternal ? 'noreferrer' : undefined}
                  className="btn-primary min-h-[60px] min-w-[280px] justify-center sm:min-w-0"
                >
                  <CalendarIcon className="h-4 w-4" />
                  {bookingCta.label}
                </a>
                <Link
                  href={heroContent.primaryCta.href}
                  className="btn-secondary min-h-[60px] min-w-[280px] justify-center sm:min-w-0"
                >
                  {ctaLabels.secondary}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm font-medium text-steel">
                {bookingCta.helper} Diagnostic en 30 min. Compatible avec vos outils actuels.
              </p>
            </div>
          </div>

          <div className="reveal-up relative lg:pt-3 xl:pt-4" style={{ animationDelay: '0.12s' }}>
            <div className="panel relative overflow-hidden border border-line bg-white p-6 sm:p-7 tablet:p-6 lg:p-7 xl:p-8">
              <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:34px_34px] opacity-40" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative">
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Lead → réponse → RDV → mandat
                  </p>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl tablet:text-[2rem] lg:text-[2.15rem] xl:text-3xl">
                    Un parcours simple. Un impact direct.
                  </h2>
                </div>

                <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                  {processFlow.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === processFlow.length - 1;

                    return (
                      <div
                        key={step.title}
                        className={`flow-card h-full ${
                          isLast
                            ? 'border-deep bg-deep text-white shadow-card'
                            : 'border-line bg-white'
                        }`}
                      >
                        <div className={`icon-chip ${isLast ? 'border-white/15 bg-white/10 text-white' : ''}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p
                          className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                            isLast ? 'text-white/65' : 'text-accent'
                          }`}
                        >
                          Étape {index + 1}
                        </p>
                        <p className={`mt-2 text-lg font-semibold [overflow-wrap:anywhere] ${isLast ? 'text-white' : 'text-ink'}`}>
                          {step.title}
                        </p>
                        <p
                          className={`mt-2 text-sm leading-relaxed [overflow-wrap:anywhere] ${
                            isLast ? 'text-white/75' : 'text-steel'
                          }`}
                        >
                          {step.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
