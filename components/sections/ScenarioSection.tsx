import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BellIcon, MessageIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, scenarioContent } from '@/content/siteContent';

export function ScenarioSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <SectionHeader
              kicker="Exemple de parcours prospect"
              title={scenarioContent.title}
              description={scenarioContent.description}
            />

            <div className="mt-6 rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Simulation de conversation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{scenarioContent.leadSource}</p>
                </div>
                <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-steel">
                  Cas concret
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {scenarioContent.messages.map((message, index) => (
                  <div
                    key={`${message.from}-${index}`}
                    className={
                      message.from === 'système'
                        ? 'ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-deep px-4 py-3 text-sm text-white'
                        : 'max-w-[88%] rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3 text-sm text-slate-700'
                    }
                  >
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] opacity-75">
                    {message.from}
                  </p>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                <div className="flex items-center gap-2">
                  <BellIcon className="h-4 w-4" />
                  <span>{scenarioContent.notification}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full border border-line bg-surface p-2 text-deep">
                <MessageIcon />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Parcours visible</p>
                <p className="text-sm font-semibold text-ink">Lead entrant jusqu’à alerte agence</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {scenarioContent.steps.map((step, index) => (
                <div key={step}>
                  <div className="panel-muted flex items-center gap-3 px-4 py-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-deep text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700 sm:text-base">{step}</span>
                  </div>
                  {index < scenarioContent.steps.length - 1 ? (
                    <div className="pl-4 pt-2 text-sm font-semibold text-accent">↓</div>
                  ) : null}
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-secondary mt-6 w-full sm:w-auto">
              {ctaLabels.secondary}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
