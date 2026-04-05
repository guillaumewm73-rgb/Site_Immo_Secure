import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, demoContent } from '@/content/siteContent';

const proofStats = [
  {
    value: '< 60 sec',
    label: 'Première réponse'
  },
  {
    value: '7j/7',
    label: 'Relance active'
  },
  {
    value: '30 min',
    label: 'Diagnostic demandé'
  }
];

export function DemoSection() {
  return (
    <section id="preuve" className="section-space section-tint">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="panel overflow-hidden p-4 sm:p-6">
            <div className="rounded-[1.75rem] border border-white/80 bg-gradient-to-br from-deep via-[#14273f] to-steel p-5 text-white shadow-card sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    {demoContent.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold sm:text-xl">{demoContent.videoTitle}</h3>
                </div>
                <div className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Parcours réel
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/95 shadow-soft">
                <Image
                  src="/dashboard-mockup.svg"
                  alt="Simulation du tableau de bord Immo Secure"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />

                <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-semibold text-deep shadow-soft">
                  Réponse envoyée en moins de 60 secondes
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-deep/10 bg-deep px-4 py-2 text-xs font-semibold text-white shadow-soft">
                  RDV poussé automatiquement
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {proofStats.map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-white/12 bg-white/10 px-4 py-4">
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader kicker="Preuve" title={demoContent.title} description={demoContent.description} />

            <div className="mt-8 space-y-4">
              {demoContent.bullets.map((item) => (
                <div key={item} className="metric-card flex items-start gap-4 px-5 py-4">
                  <span className="mt-0.5 inline-flex rounded-full bg-accent p-1 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-semibold text-slate-800 sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-accent/15 bg-white px-5 py-5 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Ce que cela prouve</p>
              <p className="mt-3 text-sm leading-relaxed text-steel sm:text-base">{demoContent.videoSubtitle}</p>
            </div>

            <div className="mt-8">
              <Link href="#contact" className="btn-primary w-full sm:w-auto">
                {ctaLabels.primary}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
