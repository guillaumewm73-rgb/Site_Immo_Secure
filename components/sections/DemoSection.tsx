import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  crmCaptureContent,
  ctaLabels,
  demoContent,
  proofCaseStudy,
  proofTestimonial,
  proofMessage
} from '@/content/siteContent';

export function DemoSection() {
  return (
    <section id="preuve" className="section-space section-tint">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="panel overflow-hidden p-3 sm:p-4">
              <div className="panel relative overflow-hidden border-white/10 bg-gradient-to-br from-deep via-[#14273f] to-steel p-4 text-white shadow-card sm:p-5">
                <div className="pointer-events-none absolute inset-x-16 top-0 h-20 rounded-full bg-accent/16 blur-3xl" />

                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="section-kicker text-white/65">
                      {demoContent.label}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold sm:text-xl">{demoContent.videoTitle}</h3>
                  </div>
                  <Link
                    href={demoContent.loomUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/15"
                  >
                    Ouvrir sur Loom
                  </Link>
                </div>

                <p className="relative mt-5 max-w-xl text-base font-semibold leading-relaxed text-white sm:text-lg">
                  {demoContent.videoIntro}
                </p>
                <p className="relative mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                  {demoContent.videoSubtitle}
                </p>

                <div className="panel-muted relative mt-5 overflow-hidden border-white/10 bg-white/95">
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      src={demoContent.loomEmbedUrl}
                      title={demoContent.videoTitle}
                      className="h-full w-full"
                      allowFullScreen
                    />
                  </div>
                </div>

                <p className="relative mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/88 sm:text-base">
                  {demoContent.videoOutro}
                </p>

                <div className="relative mt-5">
                  <Link href="#contact" className="btn-primary w-full sm:w-auto">
                    {ctaLabels.primary}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <article className="panel p-6 sm:p-7">
              <p className="section-kicker text-accent">
                {crmCaptureContent.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{crmCaptureContent.title}</h3>

              <div className="panel-muted mt-6 overflow-hidden">
                <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] gap-3 bg-surface-alt px-4 py-3 section-kicker text-steel">
                  <span>Lead</span>
                  <span>Étape</span>
                  <span>Heure</span>
                </div>
                <div className="divide-y divide-line">
                  {crmCaptureContent.rows.map((row) => (
                    <div
                      key={`${row.lead}-${row.eta}`}
                      className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] gap-3 px-4 py-4 text-sm text-ink"
                    >
                      <span className="font-medium">{row.lead}</span>
                      <span className="font-semibold text-accent">{row.stage}</span>
                      <span className="text-steel">{row.eta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div>
            <SectionHeader kicker="Preuve" title={demoContent.title} description={demoContent.description} />

            <article className="panel mt-8 p-6 sm:p-7">
              <p className="section-kicker text-accent">
                {proofCaseStudy.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{proofCaseStudy.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-steel">{proofCaseStudy.text}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {proofCaseStudy.stats.map((stat) => (
                  <div key={stat.label} className="panel-accent px-4 py-4">
                    <p className="text-xl font-semibold text-ink">{stat.value}</p>
                    <p className="mt-1 section-kicker text-accent">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel mt-5 p-6 sm:p-7">
              <p className="section-kicker text-accent">
                {proofMessage.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{proofMessage.title}</h3>

              <div className="panel-accent mt-5 p-5">
                <p className="text-sm leading-relaxed text-ink sm:text-base">“{proofMessage.body}”</p>
              </div>

              <p className="mt-4 text-sm font-medium leading-relaxed text-steel sm:text-base">
                {proofMessage.footer}
              </p>
            </article>

            <article className="panel mt-5 p-6 sm:p-7">
              <p className="section-kicker text-accent">{proofTestimonial.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{proofTestimonial.agency}</h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">“{proofTestimonial.quote}”</p>

              <div className="mt-5 space-y-3">
                {proofTestimonial.beforeAfter.map((item) => (
                  <div key={item} className="panel-accent px-4 py-3">
                    <p className="text-sm font-medium text-ink sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-5 space-y-3">
              {demoContent.bullets.map((item) => (
                <div key={item} className="metric-card flex items-start gap-4 px-5 py-4">
                  <span className="mt-0.5 inline-flex rounded-full bg-accent p-1 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-semibold text-slate-800 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
