import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PlayIcon, CheckIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, demoContent } from '@/content/siteContent';

export function DemoSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="panel overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {demoContent.label}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">{demoContent.videoTitle}</h3>
              </div>
              <div className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-steel">
                02:14
              </div>
            </div>

            <button
              type="button"
              className="mt-5 flex w-full flex-col items-center justify-center rounded-[2rem] border border-line bg-gradient-to-br from-deep via-steel to-accent px-6 py-16 text-white transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card sm:py-20"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/16 backdrop-blur">
                <PlayIcon className="h-7 w-7" />
              </span>
              <span className="mt-5 text-lg font-semibold">Lancer la démonstration</span>
              <span className="mt-2 max-w-md text-sm text-white/80">{demoContent.videoSubtitle}</span>
            </button>

            <div className="mt-5 flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-line">
                <div className="h-1.5 w-1/3 rounded-full bg-accent" />
              </div>
              <span className="text-xs font-semibold text-slate-500">Preview</span>
            </div>
          </div>

          <div>
            <SectionHeader
              kicker="Voir le système en action"
              title={demoContent.title}
              description={demoContent.description}
            />

            <div className="mt-6 space-y-3">
              {demoContent.bullets.map((item) => (
                <div key={item} className="panel-muted flex items-start gap-3 px-4 py-3">
                  <span className="mt-0.5 inline-flex rounded-full bg-deep p-1 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary sm:flex-1">
                {ctaLabels.primary}
              </Link>
              <Link href="#contact" className="btn-secondary sm:w-auto">
                {ctaLabels.secondary}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
