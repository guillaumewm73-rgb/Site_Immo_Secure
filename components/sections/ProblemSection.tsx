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
    event: 'Une autre agence répond et propose un créneau.'
  },
  {
    time: '10:08',
    event: 'Le rendez-vous est pris ailleurs avant votre rappel.'
  }
];

export function ProblemSection() {
  return (
    <section id="probleme" className="section-space section-dark">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.94fr_1.06fr] md:items-start md:gap-8 lg:gap-10 xl:gap-16">
          <div className="md:max-w-none lg:max-w-[29rem] xl:max-w-[35rem]">
            <SectionHeader title={problemContent.title} kicker="Le vrai coût du retard" theme="dark" />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
              {problemContent.paragraphs[0]}
            </p>

            <ul className="mt-8 grid max-w-xl gap-3.5">
              {problemContent.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="metric-card flex items-start gap-4 border-line bg-white px-4 py-3.5 text-sm font-medium text-ink sm:text-base"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent shadow-soft">
                    <ClockIcon className="h-4 w-4" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl rounded-[1.75rem] border border-white/12 bg-white/8 p-6 text-base font-semibold leading-relaxed text-white shadow-soft sm:text-lg">
              {problemContent.conclusion}
            </p>
          </div>

          <div className="md:w-full md:max-w-none lg:ml-auto lg:max-w-[36rem] xl:max-w-[40rem]">
            <div className="panel overflow-hidden border border-line bg-white p-6 sm:p-7 lg:p-6 xl:p-7">
              <div className="flex items-start justify-between gap-4 tablet:flex-col tablet:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Scénario le plus fréquent
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Le mandat se joue avant votre rappel</h3>
                </div>
                <div className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700">
                  Quelques minutes suffisent
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
                      <p className="mt-1 text-sm font-medium text-steel">{item.event}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-800 sm:text-base">
                Si votre suivi attend le “bon moment”, votre prospect a déjà trouvé une autre agence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
