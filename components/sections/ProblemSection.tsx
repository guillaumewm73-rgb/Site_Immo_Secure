import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { problemContent } from '@/content/siteContent';

const lossTimeline = [
  {
    time: '09:14',
    event: 'Nouveau lead entrant'
  },
  {
    time: '11:02',
    event: 'Toujours aucune réponse envoyée'
  },
  {
    time: '14:37',
    event: 'Le prospect a pris rendez-vous ailleurs'
  }
];

export function ProblemSection() {
  return (
    <section id="probleme" className="section-space">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <SectionHeader title={problemContent.title} />

            <div className="mt-5 space-y-3 text-base leading-relaxed text-slate-700 sm:text-lg">
              {problemContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-6 grid gap-3">
              {problemContent.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-line/80 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-soft sm:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-base font-semibold leading-relaxed text-rose-700 sm:text-lg">
              {problemContent.conclusion}
            </p>

            <Link href="#contact" className="btn-primary mt-6 w-full sm:w-auto">
              Voir comment récupérer plus de mandats
            </Link>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="panel p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Perte silencieuse typique
              </p>

              <ol className="mt-4 space-y-3">
                {lossTimeline.map((item) => (
                  <li key={item.time} className="panel-muted flex gap-3 px-4 py-3">
                    <span className="mt-0.5 text-sm font-semibold text-deep">{item.time}</span>
                    <span className="text-sm font-medium text-slate-700">{item.event}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                1 lead non suivi = 1 mandat potentiel offert à la concurrence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
