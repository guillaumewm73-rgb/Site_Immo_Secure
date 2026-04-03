import { BoltIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { solutionContent } from '@/content/siteContent';

const iconMap = [BoltIcon, RepeatIcon];

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-gradient-to-b from-white via-white to-amber-50/35">
      <Container>
        <SectionHeader title={solutionContent.title} description={solutionContent.intro} kicker="Solution" />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {solutionContent.pillars.map((pillar, index) => {
            const Icon = iconMap[index] ?? BoltIcon;
            const articleTone =
              index === 0
                ? 'border-sky-100 bg-gradient-to-br from-white to-sky-50/80'
                : 'border-amber-100 bg-gradient-to-br from-white to-amber-50/80';
            const badgeTone =
              index === 0
                ? 'border-sky-100 bg-sky-50/90 text-sky-900'
                : 'border-amber-100 bg-amber-50/90 text-amber-900';
            const impactTone =
              index === 0
                ? 'border-sky-200 bg-sky-50 text-sky-900'
                : 'border-emerald-200 bg-emerald-50 text-emerald-900';

            return (
              <article
                key={pillar.title}
                className={`panel group flex h-full flex-col overflow-hidden border p-7 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card sm:p-8 ${articleTone}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-h-[7.5rem]">
                    <div
                      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${badgeTone}`}
                    >
                      <Icon className="h-4 w-4" />
                      {pillar.badge}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{pillar.title}</h3>
                  </div>
                  <span className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p className="text-base leading-relaxed text-slate-700">{pillar.does}</p>

                  <div className={`mt-auto rounded-[1.5rem] border p-5 ${impactTone}`}>
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        index === 0 ? 'text-sky-700' : 'text-emerald-700'
                      }`}
                    >
                      Impact
                    </p>
                    <p className="mt-2 font-medium">{pillar.impact}</p>
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
