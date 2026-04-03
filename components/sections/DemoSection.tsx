import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CheckIcon, PlayIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, demoContent } from '@/content/siteContent';

export function DemoSection() {
  return (
    <section className="section-space section-tint">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
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
                  02:14
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/95 shadow-soft">
                <Image
                  src="/dashboard-mockup.svg"
                  alt="Aperçu du tableau de bord Immo Secure"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-deep/10 transition duration-300 ease-smooth hover:bg-deep/20"
                >
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/18 text-white backdrop-blur">
                    <PlayIcon className="h-8 w-8" />
                  </span>
                </button>

                <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-semibold text-deep shadow-soft">
                  Lead capté et qualifié
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-deep/10 bg-deep px-4 py-2 text-xs font-semibold text-white shadow-soft">
                  RDV proposé automatiquement
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 text-sm text-white/75">
                <div className="h-1.5 flex-1 rounded-full bg-white/10">
                  <div className="h-1.5 w-2/3 rounded-full bg-accent" />
                </div>
                <span>Preview premium</span>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              kicker="Voir le système en action"
              title={demoContent.title}
              description={demoContent.description}
            />

            <div className="mt-8 space-y-4">
              {demoContent.bullets.map((item, index) => (
                <div key={item} className="metric-card flex items-start gap-4 px-5 py-4">
                  <span className="icon-chip h-11 w-11 shrink-0">
                    <span className="text-sm font-semibold text-deep">{index + 1}</span>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Parcours guidé
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary sm:flex-1">
                {ctaLabels.primary}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="btn-secondary sm:w-auto">
                {ctaLabels.secondary}
              </Link>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-line/80 bg-white/90 px-5 py-4 shadow-soft">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex rounded-full bg-deep p-1 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{demoContent.videoSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
