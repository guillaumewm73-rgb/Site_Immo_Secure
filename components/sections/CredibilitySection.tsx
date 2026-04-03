import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckIcon, ShieldIcon } from '@/components/ui/Icons';
import { company, credibilityPoints, faqItems } from '@/content/siteContent';

export function CredibilitySection() {
  return (
    <section id="confiance" className="section-space bg-surface-alt">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <SectionHeader
              title="Un système concret, pas une promesse floue"
              description="Vous savez ce qui est mis en place, pourquoi, et dans quel but commercial."
              kicker="Confiance"
            />

            <ul className="mt-8 grid gap-4">
              {credibilityPoints.map((point) => (
                <li
                  key={point}
                  className="metric-card flex items-start gap-4 border-line bg-white px-5 py-4 text-sm font-medium text-ink sm:text-base"
                >
                  <span className="mt-0.5 inline-flex rounded-full bg-accent p-1 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel border-line bg-white p-6 sm:p-7">
            <div className="icon-chip">
              <ShieldIcon />
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Questions rapides</h3>
            <div className="mt-6 space-y-4">
              {faqItems.slice(0, 3).map((item) => (
                <div key={item.question} className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-soft">
                  <p className="text-sm font-semibold text-ink sm:text-base">{item.question}</p>
                  <p className="mt-2 text-sm text-steel">{item.answer}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-[1.5rem] border border-accent/15 bg-accent-soft/45 px-5 py-4 text-sm text-steel">
              Interlocuteur direct : <span className="font-semibold text-ink">{company.founderDisplay}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
