import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { processSteps } from '@/content/siteContent';

export function ProcessSection() {
  return (
    <section id="comment-ca-marche" className="section-space bg-white">
      <Container>
        <SectionHeader
          title="Mise en place simple, sans changer vos habitudes"
          description="Aucun changement compliqué. Nous adaptons le système à vos outils actuels."
          kicker="Comment ça marche"
        />

        <div className="relative mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-line lg:block" />
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel relative p-6">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-deep text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-600">Pas besoin de changer de CRM. Pas de déploiement lourd.</p>
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            Voir comment ça fonctionne chez vous
          </Link>
        </div>
      </Container>
    </section>
  );
}
