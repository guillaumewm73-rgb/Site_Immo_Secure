import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqItems } from '@/content/siteContent';

export function FaqSection() {
  return (
    <section id="faq" className="section-space">
      <Container>
        <SectionHeader
          title="Questions fréquentes"
          description="Réponses directes aux objections les plus courantes."
          kicker="FAQ"
        />

        <div className="mt-8 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="panel group p-5 open:border-deep/35"
            >
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-ink sm:text-lg">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
