import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { ctaLabels, differentiation } from '@/content/siteContent';

export function DifferentiationSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-deep/25 bg-gradient-to-br from-deep via-[#102239] to-steel px-7 py-10 text-white shadow-card sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">Positionnement</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {differentiation.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Un système de vente clair, cadré et utile pour vos équipes. Pas une couche de complexité de plus.
              </p>

              <Link
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-deep transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto sm:text-base"
              >
                {ctaLabels.primary}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {differentiation.text.map((line) => (
                <div key={line} className="rounded-[1.5rem] border border-white/12 bg-white/8 px-5 py-5 text-base font-medium leading-relaxed text-white/90 shadow-soft">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
