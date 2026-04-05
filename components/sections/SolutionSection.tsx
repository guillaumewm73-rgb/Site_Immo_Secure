import { BoltIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { solutionContent } from '@/content/siteContent';

const iconMap = [BoltIcon, RepeatIcon];

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-surface">
      <Container>
        <SectionHeader title={solutionContent.title} description={solutionContent.intro} kicker="Résultat business" />

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {solutionContent.pillars.map((pillar, index) => {
            const Icon = iconMap[index] ?? BoltIcon;

            return (
              <article
                key={pillar.title}
                className="panel group flex h-full flex-col overflow-hidden border border-line bg-white p-6 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card sm:p-7 lg:p-6 xl:p-8"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5">
                  <div className="min-h-[9rem] min-w-0">
                    <div
                      className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
                    >
                      <Icon className="h-4 w-4" />
                      {pillar.badge}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{pillar.title}</h3>
                  </div>
                  <span className="icon-chip self-start">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed text-steel sm:text-base">
                  <p className="text-base font-medium leading-relaxed text-ink">{pillar.does}</p>

                  <div className="mt-auto rounded-[1.5rem] border border-accent/15 bg-accent-soft/45 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Résultat business</p>
                    <p className="mt-2 font-medium text-ink">{pillar.impact}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
