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
    time: '09:26',
    event: 'Toujours aucune réponse. Le prospect compare.'
  },
  {
    time: '09:41',
    event: 'Une autre agence propose un créneau.'
  },
  {
    time: '10:08',
    event: 'Le rendez-vous est pris ailleurs.'
  }
];

export function ProblemSection() {
  return (
    <section id="probleme" className="section-space section-dark">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-8 xl:gap-10">
          <div className="panel-dark h-full p-6 sm:p-7">
            <SectionHeader title={problemContent.title} kicker="Le vrai coût du retard" theme="dark" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              {problemContent.paragraphs[0]}
            </p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {problemContent.bullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className={`metric-card flex items-start gap-4 border-line bg-white px-4 py-4 text-sm font-medium text-ink sm:text-base ${
                    index === problemContent.bullets.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent shadow-soft">
                    <ClockIcon className="h-4 w-4" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-[1.75rem] border border-white/12 bg-white/8 p-6 text-base font-semibold leading-relaxed text-white shadow-soft sm:text-lg">
              {problemContent.conclusion}
            </p>
          </div>

          <div className="h-full">
            <div className="panel flex h-full flex-col overflow-hidden border border-line bg-white p-6 sm:p-7 lg:p-6 xl:p-7">
              <div className="flex items-start justify-between gap-4 tablet:flex-col tablet:items-start">
                <div>
                  <p className="section-kicker text-accent">Scénario le plus fréquent</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Le mandat se joue avant votre rappel</h3>
                </div>
                <div className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-soft">
                  Quelques minutes suffisent
                </div>
              </div>

              <ol className="relative mt-8 flex-1 space-y-4 before:absolute before:bottom-8 before:left-[1.35rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-accent/40 before:via-deep/20 before:to-rose-200">
                {lossTimeline.map((item, index) => (
                  <li key={item.time} className="panel-muted relative flex items-start gap-4 px-5 py-4">
                    <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-deep text-sm font-semibold text-white shadow-soft">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-deep">{item.time}</p>
                      <p className="mt-1 text-sm font-medium text-steel">{item.event}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="panel-danger mt-6 px-5 py-4 text-sm font-semibold text-rose-800 sm:text-base">
                Vous rappelez. L’autre agence a déjà le rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
