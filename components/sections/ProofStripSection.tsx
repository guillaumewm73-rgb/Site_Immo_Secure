import { Container } from '@/components/ui/Container';
import { proofStripItems } from '@/content/siteContent';

export function ProofStripSection() {
  return (
    <section className="pb-6 sm:pb-8">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofStripItems.map((item) => (
            <div
              key={item}
              className="panel-muted px-4 py-3 text-center text-sm font-semibold text-steel transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-deep/25"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
