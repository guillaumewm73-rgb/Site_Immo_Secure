import { BoltIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { solutionContent } from '@/content/siteContent';

const iconMap = [BoltIcon, RepeatIcon];

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-white">
      <Container>
        <SectionHeader title={solutionContent.title} description={solutionContent.intro} kicker="Solution" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {solutionContent.pillars.map((pillar, index) => {
            const Icon = iconMap[index] ?? BoltIcon;
            return (
              <article
                key={pillar.title}
                className="panel group overflow-hidden border border-white/90 p-7 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line/90 bg-surface-alt/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                      <Icon className="h-4 w-4" />
                      {pillar.badge}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{pillar.title}</h3>
                  </div>
                  <span className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p className="text-base leading-relaxed text-slate-700">{pillar.does}</p>

                  <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">Impact</p>
                    <p className="mt-2 font-medium text-emerald-900">{pillar.impact}</p>
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
