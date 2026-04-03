import { Container } from '@/components/ui/Container';
import { ClockIcon, PlugIcon, ShieldIcon, SparkIcon } from '@/components/ui/Icons';
import { proofStripItems } from '@/content/siteContent';

const icons = [ClockIcon, PlugIcon, ShieldIcon, SparkIcon];

export function ProofStripSection() {
  return (
    <section className="pb-8 sm:pb-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStripItems.map((item, index) => {
            const Icon = icons[index] ?? ShieldIcon;

            return (
            <div
              key={item}
              className="metric-card flex items-center gap-4 px-5 py-4 text-left"
            >
              <span className="icon-chip h-11 w-11 shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Repère</p>
                <p className="mt-1 text-sm font-semibold text-steel sm:text-base">{item}</p>
              </div>
            </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
