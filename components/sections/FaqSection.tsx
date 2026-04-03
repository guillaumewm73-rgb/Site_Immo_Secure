import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqItems } from '@/content/siteContent';

export function FaqSection() {
  return (
    <section id="faq" className="section-space bg-white">
      <Container>
        <SectionHeader
          title="Questions fréquentes"
          description="Réponses directes aux objections les plus courantes."
          kicker="FAQ"
        />

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="panel group p-6 open:border-deep/35"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 pr-1 text-base font-semibold text-ink sm:text-lg">
                <span>{item.question}</span>
                <span className="text-2xl font-light text-accent-strong transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
