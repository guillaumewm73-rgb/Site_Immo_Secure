import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { comparisonContent, ctaLabels } from '@/content/siteContent';

const beforeFlow = ['Lead', 'Attente', 'Oublié', 'Perdu'];
const afterFlow = ['Lead', 'Réponse', 'RDV', 'Mandat'];

export function ComparisonSection() {
  return (
    <section id="avant-apres" className="section-space bg-white">
      <Container>
        <SectionHeader
          kicker="Avant / Après"
          title={comparisonContent.title}
          description={comparisonContent.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="rounded-[2rem] border border-rose-200 bg-rose-50/90 p-6 shadow-soft sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600">Avant</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-rose-900">Le lead attend, puis disparaît</h3>
              </div>
              <div className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700">
                Réactivité subie
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[repeat(4,minmax(0,1fr))]">
              {beforeFlow.map((item, index) => (
                <div key={item} className="rounded-[1.35rem] border border-rose-200 bg-white/95 px-4 py-4 text-center shadow-soft">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-500">Étape {index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-rose-900 sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium leading-relaxed text-rose-800 sm:text-base">
              Sans système, chaque trou dans le suivi laisse au prospect le temps de signer ailleurs.
            </p>
          </article>

          <article className="rounded-[2rem] border border-deep/10 bg-deep p-6 text-white shadow-card sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Après</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Le lead avance jusqu’au rendez-vous</h3>
              </div>
              <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
                Pipeline sécurisé
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[repeat(4,minmax(0,1fr))]">
              {afterFlow.map((item, index) => (
                <div key={item} className="rounded-[1.35rem] border border-white/12 bg-white/10 px-4 py-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Étape {index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-white sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium leading-relaxed text-white/80 sm:text-base">
              Avec un suivi immédiat et des relances automatiques, le prospect reçoit une réponse avant de douter.
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
