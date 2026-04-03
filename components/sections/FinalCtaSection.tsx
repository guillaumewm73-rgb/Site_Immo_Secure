import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { finalCta } from '@/content/siteContent';

export function FinalCtaSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-deep/20 bg-gradient-to-br from-steel to-deep p-8 text-white shadow-card sm:p-12">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Dernier point clé</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{finalCta.text}</p>
            </div>

            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-deep transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto sm:text-base"
            >
              {finalCta.button}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
