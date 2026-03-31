import Link from 'next/link';
import { BoltIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, solutionContent } from '@/content/siteContent';

const iconMap = [BoltIcon, RepeatIcon];

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-white">
      <Container>
        <SectionHeader title={solutionContent.title} description={solutionContent.intro} kicker="Solution" />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {solutionContent.pillars.map((pillar, index) => {
            const Icon = iconMap[index] ?? BoltIcon;
            return (
              <article
                key={pillar.title}
                className="panel group p-6 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card sm:p-7"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                  <Icon className="h-4 w-4" />
                  {pillar.badge}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{pillar.title}</h3>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ce que fait le système</p>
                    <p className="mt-1">{pillar.does}</p>
                  </div>

                  <div className="panel-muted p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ce que voit l’agence</p>
                    <p className="mt-1 text-steel">{pillar.sees}</p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      Ce que cela change commercialement
                    </p>
                    <p className="mt-1 font-medium text-emerald-900">{pillar.impact}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
