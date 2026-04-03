import { Container } from '@/components/ui/Container';
import { ClockIcon } from '@/components/ui/Icons';
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
    <section id="probleme" className="section-space bg-gradient-to-b from-white to-rose-50/35">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
          <div>
            <SectionHeader title={problemContent.title} kicker="Point de friction" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {problemContent.paragraphs[0]}
            </p>

            <ul className="mt-8 grid gap-4">
              {problemContent.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="metric-card flex items-start gap-4 border-rose-100 bg-gradient-to-r from-white to-rose-50/70 px-5 py-4 text-sm font-medium text-slate-700 sm:text-base"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 shadow-soft">
                    <ClockIcon className="h-4 w-4" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-[1.75rem] border border-rose-200/80 bg-rose-50/90 p-6 text-base font-semibold leading-relaxed text-rose-700 shadow-soft sm:text-lg">
              {problemContent.conclusion}
            </p>
          </div>

          <div>
            <div className="panel overflow-hidden border border-white/90 bg-gradient-to-br from-white via-white to-rose-50/40 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Perte silencieuse typique
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Le coût du retard</h3>
                </div>
                <div className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700">
                  Chaque heure compte
                </div>
              </div>

              <ol className="mt-8 space-y-4">
                {lossTimeline.map((item, index) => (
                  <li key={item.time} className="panel-muted flex items-start gap-4 px-5 py-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-deep text-sm font-semibold text-white shadow-soft">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-deep">{item.time}</p>
                      <p className="mt-1 text-sm font-medium text-slate-700">{item.event}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700 sm:text-base">
                1 lead non suivi = 1 mandat potentiel offert à la concurrence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
