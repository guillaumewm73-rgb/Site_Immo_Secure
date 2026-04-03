import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarIcon,
  CheckIcon,
  MessageIcon
} from '@/components/ui/Icons';
import { heroContent } from '@/content/siteContent';

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
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-36">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="reveal-up space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <h1 className="max-w-4xl text-balance text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-ink sm:text-[4.1rem] lg:text-[5rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl lg:text-[1.35rem]">
                {heroContent.subtitle}
              </p>
            </div>

            <p className="max-w-lg rounded-[1.5rem] border border-rose-200/80 bg-rose-50/90 px-5 py-4 text-sm font-semibold text-rose-700 shadow-soft sm:text-base">
              {heroContent.tension}
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href={heroContent.primaryCta.href}
                className="btn-primary min-h-[60px] min-w-[280px] justify-center sm:min-w-0 sm:max-w-sm"
              >
                {heroContent.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <p className="text-sm font-medium text-slate-500">
                Diagnostic en 30 min. Compatible avec vos outils actuels.
              </p>
            </div>
          </div>

          <div className="reveal-up relative lg:pt-4" style={{ animationDelay: '0.12s' }}>
            <div className="panel relative overflow-hidden border border-white/90 bg-white/80 p-6 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:34px_34px] opacity-35" />

              <div className="relative">
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Lead → réponse → RDV → mandat
                  </p>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    Un parcours simple. Un impact direct.
                  </h2>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {processFlow.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === processFlow.length - 1;

                    return (
                      <div
                        key={step.title}
                        className={`flow-card h-full ${isLast ? 'border-accent/45 bg-accent-soft/55' : 'bg-white/95'}`}
                      >
                        <div className="icon-chip">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Étape {index + 1}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-ink [overflow-wrap:anywhere]">
                          {step.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 [overflow-wrap:anywhere]">
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
