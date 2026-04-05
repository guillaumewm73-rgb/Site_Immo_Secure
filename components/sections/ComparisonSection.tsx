import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { comparisonContent, ctaLabels } from '@/content/siteContent';

const beforeFlow = ['Lead', 'Attente', 'Oublié', 'Perdu'];
const afterFlow = ['Lead', 'Réponse', 'RDV', 'Mandat'];

export function ComparisonSection() {
  return (
    <section id="avant-apres" className="section-space bg-white">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-accent/15 bg-accent-soft/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent shadow-soft">
            Avant / Après
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.95rem] xl:text-5xl">
            <span className="block">Avant: attente, oubli, mandat perdu.</span>
            <span className="mt-3 block text-accent">Après: réponse, rendez-vous, mandat sécurisé.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-steel sm:text-lg lg:text-[1.12rem] xl:text-xl">
            {comparisonContent.description}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <p className="rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-800 shadow-soft sm:text-base">
            La différence ? 5 minutes.
          </p>
        </div>

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
