import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { finalCta } from '@/content/siteContent';

export function FinalCtaSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-deep/20 bg-gradient-to-br from-steel to-deep p-8 text-white shadow-card sm:p-10">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {finalCta.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">{finalCta.text}</p>
            </div>

            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
            >
              {finalCta.button}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
