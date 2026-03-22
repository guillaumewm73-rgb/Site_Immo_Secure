import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { differentiation } from '@/content/siteContent';

export function DifferentiationSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-deep/25 bg-gradient-to-br from-deep to-steel px-6 py-10 text-white shadow-card sm:px-10 sm:py-14">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">Positionnement</p>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {differentiation.title}
            </h2>
            <div className="mt-5 space-y-2 text-base leading-relaxed text-white/85 sm:text-lg">
              {differentiation.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
            >
              Voir comment récupérer plus de mandats
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
