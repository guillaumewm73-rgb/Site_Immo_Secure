import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckIcon, ShieldIcon } from '@/components/ui/Icons';
import { company, credibilityPoints } from '@/content/siteContent';

const trustBlocks = [
  {
    title: 'Spécialisation immobilière indépendante',
    text: 'Le système est pensé pour les contraintes réelles des petites et moyennes agences.'
  },
  {
    title: 'Problèmes terrain identifiés',
    text: 'Focus sur la réactivité, le suivi post-estimation et la perte de leads chauds.'
  },
  {
    title: 'Pilotage orienté résultats',
    text: 'Objectif unique : récupérer des mandats que votre process actuel laisse partir.'
  }
];

export function CredibilitySection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div>
            <SectionHeader
              title="Pourquoi c’est crédible"
              description="Pas de promesse floue. Une méthode commerciale cadrée, appliquée à votre agence."
              kicker="Confiance"
            />

            <ul className="mt-7 space-y-3">
              {credibilityPoints.map((point) => (
                <li
                  key={point}
                  className="panel-muted flex items-start gap-3 px-4 py-3 text-sm font-medium text-slate-700 sm:text-base"
                >
                  <span className="mt-0.5 inline-flex rounded-full bg-deep p-1 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-5 sm:p-6">
            <div className="inline-flex rounded-full border border-line bg-surface p-2 text-deep">
              <ShieldIcon />
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Cadre d’intervention clair
            </h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600">
              Vous savez précisément ce qui est mis en place, pourquoi, et quel impact commercial attendre.
            </p>

            <div className="mt-5 space-y-3">
              {trustBlocks.map((block) => (
                <div key={block.title} className="panel-muted p-4">
                  <p className="text-sm font-semibold text-ink sm:text-base">{block.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{block.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-line bg-white px-4 py-3 text-sm text-slate-600">
              Interlocuteur direct : <span className="font-semibold text-ink">{company.founder}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
