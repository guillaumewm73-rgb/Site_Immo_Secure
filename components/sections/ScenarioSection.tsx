import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, BellIcon, MessageIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, scenarioContent } from '@/content/siteContent';

export function ScenarioSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
          <div>
            <SectionHeader
              kicker="Exemple de parcours prospect"
              title={scenarioContent.title}
              description={scenarioContent.description}
            />

            <div className="panel mt-8 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Simulation de conversation
                  </p>
                  <p className="mt-2 text-base font-semibold text-ink">{scenarioContent.leadSource}</p>
                </div>
                <span className="inline-flex rounded-full border border-line bg-surface-alt/80 px-4 py-2 text-xs font-semibold text-steel">
                  Cas concret
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {scenarioContent.messages.map((message, index) => (
                  <div
                    key={`${message.from}-${index}`}
                    className={
                      message.from === 'système'
                        ? 'ml-auto max-w-[88%] rounded-[1.5rem] rounded-br-md bg-deep px-5 py-4 text-sm text-white shadow-soft'
                        : 'max-w-[88%] rounded-[1.5rem] rounded-bl-md border border-line bg-surface-alt/80 px-5 py-4 text-sm text-slate-700 shadow-soft'
                    }
                  >
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] opacity-75">
                      {message.from}
                    </p>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-800">
                <div className="flex items-center gap-2">
                  <BellIcon className="h-4 w-4" />
                  <span>{scenarioContent.notification}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden border border-white/90 bg-white/90 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="icon-chip">
                <MessageIcon />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Parcours visible</p>
                <p className="text-base font-semibold text-ink">Lead entrant jusqu’à alerte agence</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {scenarioContent.steps.map((step, index) => (
                <div key={step}>
                  <div className="metric-card flex items-center gap-4 px-5 py-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700 sm:text-base">{step}</span>
                  </div>
                  {index < scenarioContent.steps.length - 1 ? (
                    <div className="pl-5 pt-2 text-sm font-semibold text-accent">↓</div>
                  ) : null}
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-secondary mt-8 w-full sm:w-auto">
              {ctaLabels.secondary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
