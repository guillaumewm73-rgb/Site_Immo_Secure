import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { ctaLabels, processSteps } from '@/content/siteContent';

export function ProcessSection() {
  return (
    <section id="comment-ca-marche" className="section-space bg-white">
      <Container>
        <SectionHeader
          title="Mise en place simple, sans changer vos habitudes"
          description="Aucun changement compliqué. Nous adaptons le système à vos outils actuels."
          kicker="Comment ça marche"
        />

        <div className="relative mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-8 hidden h-px bg-gradient-to-r from-deep/0 via-accent/70 to-deep/0 lg:block" />
          {processSteps.map((step, index) => (
            <article key={step.title} className="metric-card relative p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-deep text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-600 sm:text-base">Pas besoin de changer de CRM. Pas de déploiement lourd.</p>
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            {ctaLabels.secondary}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
